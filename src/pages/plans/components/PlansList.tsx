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
    const onSelectPlan = (plan:Plan) => {
        const actualPrice = user.planUser==="Para alguien más" ? 0.95* (plan.price) : plan.price;
        dispatch(setDataUser({ ...user, planType: plan.name, price: actualPrice}))
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

    useEffect(() => {
        if (user.name) {
            getPlans();
        }
    }, [getPlans, user.name]);

    const plansForAge = plans.filter((plan: Plan) => plan.age >= getYears(user.birthDay));

    return (
        <div className="plans__plans">
            {errorPlans && <p className="message_error">Ha ocurrido un error</p>}
            {isInfoPlansLoading && <p>Cargando...</p>}
            {!isInfoPlansLoading && selectedUserPlan && plans.length > 0 && (plansForAge.map((plan: any) => (
                <div key={plan.name} >
                    <h2>{plan.name}</h2>
                    <p>{plan.description}</p>
                    <Button type="button" onClick={()=>onSelectPlan(plan)} className="button--pink" text="Seleccionar Plan" />
                </div>
            )))}
        </div>
    );
}
export default PlansList;