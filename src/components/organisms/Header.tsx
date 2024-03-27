import { ReactComponent as RimacSVG } from '../../assets/rimac.svg';
import telephone from '../../assets/icons/GlTelephoneSolid.png';
const Header = () => {
    return (
        <header className='header'>
            <div>
                <div className='header__logo'>
                    <RimacSVG className='header__logo' />
                </div>
                <div className='header__information'>
                    <span className='header__information--message'>¡Compra por este medio!</span>
                    <div className='header__boxNumber'>
                        <img src={telephone} alt="icono de telefono" />
                        <span>(01) 411 6001</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;