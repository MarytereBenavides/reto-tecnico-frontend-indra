
import { BaseLayout, Button } from "../../components";
import FamilyImg from '../../assets/img/family.png';
function Home() {
    const isLoading = false;
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
                    <form action="/planes">
                        <div>
                        <select name="sort">
                            <option value="price">Price</option>
                            <option value="stars">Stars</option>
                            <option value="distance">Distance</option>
                        </select>
                        <div>
                            <label>
                                <span>Apellido</span>
                                <input type="text" name="lastname" required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Email</span>
                                <input type="email" name="email" />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Contraseña</span>
                                <input type="password" name="password" />
                            </label>
                        </div>
                        </div>
                        <div className="home__terms">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="privacy"
                                    value="privacy"
                                />
                              <span> Acepto lo Política de Privacidad</span>
                            </label>
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="comunications"
                                    value="comunications"
                                />
                             <span> Acepto la Política Comunicaciones Comerciales</span>  
                            </label>
                            <a href="/" className="home__termsAndConditions">Aplican Términos y Condiciones.</a>
                        </div>
                        <div>
                            <Button type="submit" text="Cotiza aquí" isLoading={isLoading} className="button--black" />
                        </div>
                    </form>
                </div>
            </section>
        </BaseLayout>
    )
}
export default Home;