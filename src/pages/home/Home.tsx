
import { BaseLayout } from "../../components";
import FamilyImg from '../../assets/img/family.png';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInfoUser } from "../../hooks/useInfoUser";
import { useDispatch } from "react-redux";
import { setDataUser } from "../../store/features/UserStore";
import FormHome from "./components/FormHome";
function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { getInfoUser, errorInfoUser, isInfoUserLoading, dataInfoUser } = useInfoUser();
    const [dniError, setDniError] = useState(false);
    const [ceError, setCeError] = useState(false);
    const [cellphoneError, setCellphoneError] = useState(false);
    const [privacyError, setPrivacyError] = useState(false);
    const [comunicationError, setComunicationError] = useState(false);
    let [dataCurrentUser, setDataCurrentUser] = useState({
        document: '',
        documentNumber: '',
        cellphone: '',
        planUser: "",
        planType: "",
        price: 0,
        name: '',
        lastName: '',
        birthDay: ''
    });
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDniError(false);
        setCellphoneError(false);
        setPrivacyError(false);
        setComunicationError(false);
        const form = e.currentTarget;
        const formData = new FormData(form);
        let hasError = false;
        const data = {
            ...dataCurrentUser,
            document: formData.get('document') as string,
            documentNumber: formData.get('documentNumber') as string,
            cellphone: formData.get('cellphone') as string,
        };
        if (data.document === '1' && data.documentNumber.toString().length !== 8) {
            setCeError(false);
            setDniError(true);
            hasError = true;
        }
        if (data.document === '2' && data.documentNumber.toString().length !== 12) {
            setCeError(true);
            setDniError(false);
            hasError = true;
        }
        if (data.cellphone.toString().length !== 9) {
            setCellphoneError(true);
            hasError = true;
        }
        if (!formData.get('privacy')) {
            setPrivacyError(true);
            hasError = true;
        }
        if (!formData.get('comunications')) {
            setComunicationError(true);
            hasError = true;
        }
        if (hasError) {
            return;
        }
        try {
            setDataCurrentUser(data);
            await getInfoUser();
        } catch (error) {
            console.error('Error in getInfoUser:', error);
            throw error;
        }
    };
    useEffect(() => {
        if (dataInfoUser) {
            const allData = { ...dataCurrentUser, ...dataInfoUser };
            dispatch(setDataUser(allData))
        }
    }, [dataInfoUser, dataCurrentUser, dispatch, navigate]);

    useEffect(() => {
        if (!isInfoUserLoading && !errorInfoUser && dataInfoUser.name.length > 0) {
            navigate('/planes');
        }
    }, [isInfoUserLoading, errorInfoUser, navigate, dataInfoUser.name]);
    return (
        <BaseLayout isHome>
            <section id="home" className="home">
                <div>
                    <img src={FamilyImg} alt="imagen de familia" className='home__image--web' />
                    <div className="home__form">
                        <div className="home__title--mobile">
                            <div className="home_title">
                                <p className="home__title--tag">Seguro Salud Flexible</p>
                                <p className="home__title--title">Creado para ti y tu familia</p>
                            </div>
                            <img src={FamilyImg} alt="imagen de familia" className='home__image--mobile' />
                        </div>
                        <FormHome onSubmit={onSubmit} dniError={dniError} ceError={ceError} cellphoneError={cellphoneError} privacyError={privacyError} comunicationError={comunicationError} isInfoUserLoading={isInfoUserLoading} errorInfoUser={errorInfoUser} />
                    </div>
                </div>
            </section>
        </BaseLayout>
    )
}
export default Home;