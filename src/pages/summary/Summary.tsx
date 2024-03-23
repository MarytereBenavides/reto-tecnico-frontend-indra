import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { BaseLayout } from "../../components";

function Summary(){
    const user = useSelector(
        (state: RootState) => state.userStore.dataUser,
    );
    console.log(user,'userUSer')
    return (
        <BaseLayout>
            <h1>Summary</h1>
        </BaseLayout>
    )
}
export default Summary;