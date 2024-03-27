import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { BaseLayout, Steps } from "../../components";

function Summary() {
    const user = useSelector(
        (state: RootState) => state.userStore.dataUser,
    );
    console.log(user, 'userUSer')
    return (
        <BaseLayout>
            <Steps step={2} />
            <section id="summary" className="summary">
                <div>
                    <div className="summary__content">
                        <h1 className="summary_title">Resumen del seguro</h1>
                        <div className="card card--noHover">
                            <div>
                                <p>PRECIOS CALCULADOS PARA:</p>
                                <p>{user.name} {user.lastName}</p>
                            </div>
                            <div>
                                <h4>Responsable de pago</h4>
                                <p>{user.document === "1" ? "DNI" : "CE"}: {user.documentNumber}</p>
                                <p>Celular: {user.cellphone}</p>
                            </div>
                            <div>
                                <h4>Plan elegido</h4>
                                <p>{user.planType}</p>
                                <p>Costo del Plan: {`$${user.price}`} al mes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BaseLayout>
    )
}
export default Summary;