import { BackButton } from "../atoms";
import Logo from '../../assets/img/line.png';
function Steps({ step }: { step: number }) {
    return (
        <div className="steps">
            <div>
            <div className="steps__bar">
                <BackButton className="steps__bar__button" />
                <div className="steps__bar__steps">
                    <div>
                        <div className={`steps__bar__circle ${step === 1 ? 'steps__bar__circle--active' : ''}`}>1</div>
                        <p className={`steps__bar__text ${step === 1 ? 'steps__bar__text--active' : ''}`}>Planes y Coberturas</p>
                    </div>
                    <img src={Logo} alt="lines" className='steps__bar__line' />
                    <div>
                        <div className={`steps__bar__circle ${step === 2 ? 'steps__bar__circle--active' : ''}`}>2</div>
                        <p className={`steps__bar__text ${step === 2 ? 'steps__bar__text--active' : ''}`}>Resumen</p>
                    </div>
                </div>
            </div>

            <BackButton className="steps__button" classNameButton="button__back__button--color" hasText/>
            </div>
        </div>
    );
}
export default Steps;