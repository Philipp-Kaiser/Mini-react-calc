import "./Button.css";

function Button({ title, size, callBack, value }) {
  return (
    <button className={size} onClick={() => callBack(value)}>
      {title}
    </button>
  );
}

export default Button;
