interface ButtonCardProps {
    icon: string;
    title: string;
    description: string;
    isSelect: boolean;
}
const ButtonCard = ({ isSelect, icon, title, description }: ButtonCardProps) => {

    return (
        <div className={`${isSelect && "card__selected"} card`} >
            <div className="card__option--small">
                <div className={isSelect ? "card__circle card__circle--active" : "card__circle"} />
                <div className="text">
                    <div>
                        <img src={icon} alt={`icono ${title}`} />
                        <h3>{title}</h3>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default ButtonCard;