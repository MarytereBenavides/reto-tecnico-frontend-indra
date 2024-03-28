import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { plansUser } from "../../../services/infoUser";
import { getYears, Constants } from "../../../utils";
import { Button } from "../../../components";
import { SummaryDataUser, Plan } from "../../../types";
import { setDataUser } from "../../../store/features/UserStore";
import { useDispatch } from "react-redux";
import parse from 'html-react-parser';
import ImagePar from "../../../assets/icons/IcHospitalLight.png";
import ImageImpar from "../../../assets/icons/IcHomeLight.png";
interface PlansListProps {
    user: SummaryDataUser;
    selectedUserPlan: boolean;
}
function PlansList({ user, selectedUserPlan }: PlansListProps) {
    const dispatch = useDispatch();
    const [plans, setPlans] = useState<Plan[]>([]);
    const [isInfoPlansLoading, setIsInfoPlansLoading] = useState(false);
    const [errorPlans, setErrorPlans] = useState(false);
    const { IMPORTANT_FRASES } = Constants;
    const navigate = useNavigate();
    function actualPrice(plan: Plan) {
        return user.planUser === "Para alguien más" ? 0.95 * (plan.price) : plan.price;
    }
    const onSelectPlan = (plan: Plan) => {
        dispatch(setDataUser({ ...user, planType: plan.name, price: actualPrice(plan) }))
        navigate('/resumen');
    }
    function highlightPhrases(text: string) {
        return  text.replace(
            new RegExp(`(${IMPORTANT_FRASES.join('|')})`, 'gi'),
            '<b>$1</b>'
          );
    }
    const getPlans = useCallback(async () => {
        setIsInfoPlansLoading(true);
        setErrorPlans(false);
        try {
            const response = await plansUser();
            setPlans(response.list);
        } catch (error) {
            setErrorPlans(true);
            throw error;
        } finally {
            setIsInfoPlansLoading(false);
        }
    }, []);
    function isRecommended(planName: string) {
        return planName === "Plan en Casa y Clínica";
    }
    useEffect(() => {
        if (user.name) {
            getPlans();
        }
    }, [getPlans, user.name]);

    const plansForAge = plans.filter((plan: Plan) => plan.age >= getYears(user.birthDay));

    return (
        <div className="plans__plans">
            {errorPlans && <p className="message_error">Ha ocurrido un error</p>}
            {isInfoPlansLoading && selectedUserPlan && <p>Cargando...</p>}
            {!isInfoPlansLoading && selectedUserPlan && plans.length > 0 && (plansForAge.map((plan: any, index:number) => (
                <div key={plan.name} className="card card--noHover" >
                    <div>
                        {isRecommended(plan.name) && <p className="plans__plans__recommended">Plan recomendado</p>}
                        <img src={index % 2 === 0 ?  ImagePar : ImageImpar} alt="plan icon" className="plans__plans__image" />
                        <h2 className="plans__plans__title">{plan.name}</h2>
                        <p className="plans__plans__costTitle">COSTO DEL PLAN</p>
                        {user.planUser === "Para alguien más" && <p className="plans__plans__previewCost">{`$${plan.price} antes`}
                        </p>}
                        <p className="plans__plans__price">{`$${actualPrice(plan)} al mes`}
                        </p>
                        <hr className="plans__plans__line" />
                        <ul>
                            {plan.description.map((plan: string) => (
                                <li key={plan} className="plans__plans__description">{parse(highlightPhrases(plan))}</li>
                            ))}
                        </ul>
                    </div>

                    <Button type="button" onClick={() => onSelectPlan(plan)} className="button--pink" text="Seleccionar Plan" />
                </div>
            )))}
        </div>
    );
}
export default PlansList;