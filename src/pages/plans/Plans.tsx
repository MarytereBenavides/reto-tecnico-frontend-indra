import { useInfoUser } from "../../hooks/useInfoUser";
import { BaseLayout } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Plans(){
    const user = useSelector(
        (state: RootState) => state.userStore.dataUser,
      );

      console.log(user);
    return (
        <BaseLayout>
            <section id="plans" className="plans">
                <div className="plans__about">
                <h1 className="plans__title">{user.name} ¿Para quién deseas cotizar?</h1>
                <p className="plans__description">Selecciona la opción que se ajuste más a tus necesidades.</p>
                </div>
                </section>
              
        </BaseLayout>
    )
}
export default Plans;