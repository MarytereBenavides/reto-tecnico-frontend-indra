
import { BaseLayout } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState } from "react";
import { PlansList, PlansOptions } from "./components";


function Plans() {
    const user = useSelector(
        (state: RootState) => state.userStore.dataUser,
    );
    const [selectedUserPlan, setSelectedUserPlan] = useState('');

    return (
        <BaseLayout>
            <section id="plans" className="plans">
                <div>
                    <div className="plans__about">
                        <h1 className="plans__title">{user.name} ¿Para quién deseas cotizar?</h1>
                        <p className="plans__description">Selecciona la opción que se ajuste más a tus necesidades.</p>
                    </div>

                    <PlansOptions setSelectedUserPlan={setSelectedUserPlan} />

                    <PlansList user={user} selectedUserPlan={selectedUserPlan.length > 0} />
                </div>

            </section>

        </BaseLayout>
    )
}
export default Plans;