import { Button } from "../../../components";
import Arrow from "../../../assets/icons/Vector.png";
interface FormHomeProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    dniError: boolean;
    ceError: boolean;
    cellphoneError: boolean;
    privacyError: boolean;
    comunicationError: boolean;
    isInfoUserLoading: boolean;
    errorInfoUser: boolean;
}
function FormHome({ onSubmit, dniError, ceError, cellphoneError, privacyError, comunicationError, isInfoUserLoading, errorInfoUser }: FormHomeProps) {
    return (
        <form onSubmit={onSubmit}>
            <hr className="home__line" />
            <p className="home__description">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
            <div className="forms">
                <div className="input__dni">
                    <div className="input__dni__type">
                    <img src={Arrow} alt="" />
                    <select name="document">
                        <option value="1">DNI</option>
                        <option value="2">CE</option>
                        
                    </select>
                    </div>
                    <div>
                        <label>
                            <span>Nro. de documento</span>
                            <input type="text"name="documentNumber" pattern="[0-9]*"
                                minLength={8} maxLength={12} />
                        </label>
                    </div>
                </div>
                {dniError && <p className="home__error">*El DNI debe tener 8 dígitos</p>}
                        {ceError && <p className="home__error">*El CE debe tener 12 dígitos</p>}
                <div className="input__cellphone">
                    <label>
                        <span>Celular</span>
                        <input type="tel" name="cellphone" />
                    </label>
                    
                </div>
                {cellphoneError && <p className="home__error">*El celular debe tener 9 dígitos</p>}
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
            <div className="boxButton">
                <Button type="submit" text="Cotiza aquí" isLoading={isInfoUserLoading} className="button--black" />
                {errorInfoUser && <p className="home__error">*Error en el registro</p>}
            </div>
        </form>
    )
}
export default FormHome;