interface ButtonProps {
    text: string;
    type: 'submit' | 'button';
    className?: string;
    onClick?: () => void;
    isLoading?: boolean;
}
const Button = ({ text, type, className, onClick, isLoading }: ButtonProps) => {
    return <button type={type} className={`button ${className}`} onClick={onClick} aria-label={text}>
        {isLoading ? (
            <span
                style={{
                    border: `3px solid white`,
                    borderBottomColor: 'transparent',
                }}
                className="loader"
            ></span>
        ) : (
            <span>{text}</span>
        )}</button>;
}
export default Button;