import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { plansUser } from "../../../services/infoUser";
import { getYears } from "../../../utils";
interface PlansListProps {
    user: any;
    selectedUserPlan: any;
}
function PlansList({user, selectedUserPlan}:PlansListProps) {
    const [plans, setPlans] = useState([]);
    const [isInfoPlansLoading, setIsInfoPlansLoading] = useState(false);
    const [errorPlans, setErrorPlans] = useState(false);
    const navigate = useNavigate();
    const onSelectPlan = () => {
        navigate('/resumen');
    }
    console.log(user,'userUSer')
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

    const plansForAge = plans.filter((plan: any) => plan.age >= getYears(user.birthDay));

  return (
    <div className="plans__plans">
                    {errorPlans && <p className="message_error">Ha ocurrido un error</p>}
                    {isInfoPlansLoading && <p>Cargando...</p>}
                    {!isInfoPlansLoading &&selectedUserPlan && plans.length>0 && (plansForAge.map((plan: any) => (
                        <button key={plan.id} onClick={onSelectPlan}>
                            <h2>{plan.name}</h2>
                            <p>{plan.description}</p>

                        </button>
                    )))}
                </div>
  );
}
export default PlansList;