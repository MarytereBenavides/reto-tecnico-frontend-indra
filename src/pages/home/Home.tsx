
import { BaseLayout, Button } from "../../components";
import FamilyImg from '../../assets/img/family.png';
import { useEffect, useState } from "react";
import { InfoUser, User } from "@/types";
import { useNavigate  } from "react-router-dom";
import { useInfoUser } from "../../hooks/useInfoUser";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setDataUser } from "../../store/features/UserStore";
function Home() {
    const navigate  = useNavigate ();
    const dispatch = useDispatch();
    const {getInfoUser, errorInfoUser, isInfoUserLoading, dataInfoUser} = useInfoUser();
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
        planType:"",
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
          }
    };
    useEffect(() => {
        if (dataInfoUser) {
            const allData = { ...dataInfoUser, ...dataCurrentUser };
            dispatch(setDataUser(allData))
        }
    }, [dataInfoUser, dataCurrentUser, dispatch, navigate]);

    useEffect(() => {
        if (!isInfoUserLoading && !errorInfoUser && dataInfoUser.name) {
            navigate('/planes');
        }
    }, [isInfoUserLoading, errorInfoUser, navigate, dataInfoUser.name]);
    return (
        <BaseLayout isHome>
            <section id="home" className="home">
                <img src={FamilyImg} alt="imagen de familia" className='home__image--web' />
                <div className="home__form">
                    <div className="home__title--mobile">
                        <div className="home_title">
                            <p className="home__title--tag">Seguro Salud Flexible</p>
                            <p className="home__title--title">Creado para ti y tu familia</p>
                        </div>
                        <img src={FamilyImg} alt="imagen de familia" className='home__image--mobile' />
                    </div>
                    <form onSubmit={onSubmit}>
                        <hr className="home__line" />
                        <p className="home__description">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                        <div>
                            <select name="document">
                                <option value="1">DNI</option>
                                <option value="2">CE</option>
                            </select>
                            <div>
                                <label>
                                    <span>Nro. de documento</span>
                                    <input type="text" name="documentNumber" pattern="[0-9]*"
                                        minLength={9} maxLength={12} />
                                </label>
                                {dniError && <p className="home__error">*El DNI debe tener 8 dígitos</p>}
                                {ceError && <p className="home__error">*El CE debe tener 12 dígitos</p>}
                            </div>
                            <div>
                                <label>
                                    <span>Celular</span>
                                    <input type="tel" name="cellphone" />
                                </label>
                                {cellphoneError && <p className="home__error">*El celular debe tener 9 dígitos</p>}
                            </div>
                        </div>
                        <div className="home__terms">
                            <div>
                                <label className="checkbox" >
                                    <input
                                        type="checkbox"
                                        name="privacy"
                                        value="privacy"
                                    />
                                    <span> Acepto lo Política de Privacidad</span>
                                </label>
                                {privacyError && <p className="home__error">*Debes aceptar la política de privacidad</p>}
                            </div>
                            <div>
                                <label className="checkbox">
                                    <input
                                        type="checkbox"
                                        name="comunications"
                                        value="comunications"
                                    />
                                    <span> Acepto la Política Comunicaciones Comerciales</span>
                                </label>
                                {comunicationError && <p className="home__error">*Debes aceptar la política de comunicaciones</p>}
                            </div>
                            <a href="/" className="home__termsAndConditions">Aplican Términos y Condiciones.</a>
                        </div>
                        <div>
                            <Button type="submit" text="Cotiza aquí" isLoading={isInfoUserLoading} className="button--black" />
                            {errorInfoUser && <p className="home__error">*Error en el registro</p>}
                        </div>
                    </form>
                </div>
            </section>
        </BaseLayout>
    )
}
export default Home;