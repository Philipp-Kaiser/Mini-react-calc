import { useEffect, useState } from "react";
import "./App.css";
import Headline from "./Headline";
import Counter from "./Counter";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const changeCount = (valueFromButton) => {
    setCount(count + valueFromButton);
  };

  const buttonList = [
    { title: "- ???", size: "s3", value: -Math.floor(Math.random() * 100) },
    { title: "- 10", size: "s2", value: -10 },
    { title: "- 1", size: "s1", value: -1 },
    { title: "+ 1", size: "s1", value: 1 },
    { title: "+ 10", size: "s2", value: 10 },
    { title: "+ ???", size: "s3", value: Math.floor(Math.random() * 100) },
  ];
  return (
    <div className='App'>
      <Headline title='My mini calculator' />
      <Counter title={count} />
      <div>
        {buttonList.map((button, _index) => (
          <Button
            key={_index}
            title={button.title}
            size={button.size}
            callBack={changeCount}
            value={button.value}
          />
        ))}
      </div>
      <Button title='Reset' size='s4' callBack={() => setCount(0)} />
    </div>
  );
}

useEffect(() => {
  console.log("Diese App wurde gestartet");
}, []);

export default App;
