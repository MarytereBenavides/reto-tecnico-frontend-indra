import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { plansUser } from "../../../services/infoUser";
import { getYears } from "../../../utils";
import { Button } from "../../../components";
import { SummaryDataUser, Plan } from "../../../types";
import { setDataUser } from "../../../store/features/UserStore";
import { useDispatch } from "react-redux";
interface PlansListProps {
    user: SummaryDataUser;
    selectedUserPlan: boolean;
}
function PlansList({ user, selectedUserPlan }: PlansListProps) {
    const dispatch = useDispatch();
    const [plans, setPlans] = useState<Plan[]>([]);
    const [isInfoPlansLoading, setIsInfoPlansLoading] = useState(false);
    const [errorPlans, setErrorPlans] = useState(false);
    const navigate = useNavigate();
    function actualPrice(plan: Plan) {
        return user.planUser === "Para alguien más" ? 0.95 * (plan.price) : plan.price;
    }
    const onSelectPlan = (plan: Plan) => {
        dispatch(setDataUser({ ...user, planType: plan.name, price: actualPrice(plan) }))
        navigate('/resumen');
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
            {!isInfoPlansLoading && selectedUserPlan && plans.length > 0 && (plansForAge.map((plan: any) => (
                <div key={plan.name} className="card card--noHover" >
                    <div>
                        {isRecommended(plan.name) && <p className="plans__plans__recommended">Plan recomendado</p>}
                        <h2 className="plans__plans__title">{plan.name}</h2>
                        <p className="plans__plans__costTitle">COSTO DEL PLAN</p>
                        {user.planUser === "Para alguien más" && <p className="plans__plans__previewCost">{`$${plan.price} antes`}
                        </p>}
                        <p className="plans__plans__price">{`$${actualPrice(plan)} al mes`}
                        </p>
                        <hr className="plans__plans__line" />
                        <ul>
                            {plan.description.map((plan: string) => (
                                <li key={plan} className="plans__plans__description">{plan}</li>
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