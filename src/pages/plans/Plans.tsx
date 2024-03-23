import IconForMy from "../../assets/icons/IcProtectionLight.png";
import IconForSomeoneElse from "../../assets/icons/IcAddUserLight.png";
import { BaseLayout, ButtonCard } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState } from "react";

function Plans() {
    const user = useSelector(
        (state: RootState) => state.userStore.dataUser,
    );
    const [selectedPlan, setSelectedPlan] = useState('');

    const onSelectPlan = (e: any) => {
        setSelectedPlan(e.target.value);
    };
    return (
        <BaseLayout>
            <section id="plans" className="plans">
                <div className="plans__about">
                    <h1 className="plans__title">{user.name} ¿Para quién deseas cotizar?</h1>
                    <p className="plans__description">Selecciona la opción que se ajuste más a tus necesidades.</p>
                </div>
                <div className="plans__options">
                    <input type="radio" id="ForMe" name="plans" value="Para mí" onChange={onSelectPlan} />
                    <label htmlFor="ForMe">
                        <ButtonCard isSelect={selectedPlan === 'Para mí'} icon={IconForMy} title="Para mí" description="Cotiza tu seguro de salud y agrega familiares si así lo deseas." /></label>
                    <label htmlFor="ForOther">  <input type="radio" id="ForOther" name="plans" value="Para alguien más" onChange={onSelectPlan} />
                        <ButtonCard isSelect={selectedPlan === 'Para alguien más'} icon={IconForSomeoneElse} title="Para alguien más" description="Realiza una cotización para uno de tus familiares o cualquier persona." /></label>
                </div>

            </section>

        </BaseLayout>
    )
}
export default Plans;