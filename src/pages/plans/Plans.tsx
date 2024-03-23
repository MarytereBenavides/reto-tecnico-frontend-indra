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
            <h1>Plans</h1>
        </BaseLayout>
    )
}
export default Plans;