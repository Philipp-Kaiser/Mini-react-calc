import "./Counter.css";

function Counter({ title }) {
  const randomColor = `hsl(${title}, 30%, 70%)`;
  return (
    <div className='counter' style={{ color: randomColor }}>
      {title}
    </div>
  );
}

export default Counter;
