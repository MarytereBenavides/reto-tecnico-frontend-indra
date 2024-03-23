import IconForMy from "../../../assets/icons/IcProtectionLight.png";
import IconForSomeoneElse from "../../../assets/icons/IcAddUserLight.png";
import { ButtonCard } from "../../../components";
import { useState } from "react";
interface PlansOptionsProps {
    setSelectedUserPlan: (value: string) => void;
}
function PlansOptions({setSelectedUserPlan}:PlansOptionsProps) {
const [selectedPlan, setSelectedPlan] = useState   ('');
    const onSelectPlan = (e: any) => {
        setSelectedPlan(e.target.value);
        setSelectedUserPlan(e.target.value);
    };

  return (
    <div className="plans__options">
                    <input type="radio" id="ForMe" name="plans" value="Para mí" onChange={onSelectPlan} />
                    <label htmlFor="ForMe">
                        <ButtonCard isSelect={selectedPlan === 'Para mí'} icon={IconForMy} title="Para mí" description="Cotiza tu seguro de salud y agrega familiares si así lo deseas." /></label>
                    <label htmlFor="ForOther">  <input type="radio" id="ForOther" name="plans" value="Para alguien más" onChange={onSelectPlan} />
                        <ButtonCard isSelect={selectedPlan === 'Para alguien más'} icon={IconForSomeoneElse} title="Para alguien más" description="Realiza una cotización para uno de tus familiares o cualquier persona." /></label>
                </div>
  );
}
export default PlansOptions;