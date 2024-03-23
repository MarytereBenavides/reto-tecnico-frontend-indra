
import { BaseLayout } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useCallback, useEffect, useState } from "react";
import { plansUser } from "../../services/infoUser";
import { PlansOptions } from "./components";

function Plans() {
    const user = useSelector(
        (state: RootState) => state.userStore.dataUser,
    );
    const [selectedUserPlan, setSelectedUserPlan] = useState('');
    const [plans, setPlans] = useState([]);
    const [isInfoPlansLoading, setIsInfoPlansLoading] = useState(false);
    const [errorPlans, setErrorPlans] = useState(false);

    const getPlans = useCallback(async () => {
        setIsInfoPlansLoading(true);
        setErrorPlans(false);
        try {
            const response = await plansUser();
            console.log(response, 'response');
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

    return (
        <BaseLayout>
            <section id="plans" className="plans">
                <div className="plans__about">
                    <h1 className="plans__title">{user.name} ¿Para quién deseas cotizar?</h1>
                    <p className="plans__description">Selecciona la opción que se ajuste más a tus necesidades.</p>
                </div>

                <PlansOptions setSelectedUserPlan={setSelectedUserPlan} />
                <div className="plans__plans">
                    {selectedUserPlan.length>0 && plans.length>0 && (plans.map((plan: any) => (
                        <div key={plan.id}>
                            <h2>{plan.name}</h2>
                            <p>{plan.description}</p>
                        </div>
                    )))}
                </div>
            </section>


        </BaseLayout>
    )
}
export default Plans;