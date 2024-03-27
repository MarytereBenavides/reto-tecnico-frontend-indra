function BackButton({className, classNameButton, hasText}: {className?: string, classNameButton?: string, hasText?: boolean}) {
  return (
    <button className={`button__back ${className}`} onClick={() => window.history.back()}>
    <div className={`button__back__button ${classNameButton}`}>‹</div>
   {hasText && <p>Volver</p>}
</button>
  );
}   
export default BackButton;