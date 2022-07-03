import "./button.css";
function Button({ text, style, onClick }) {
  return (
    <button className="btn" style={style} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "ButtonText",
};

export default Button;
