import './App.scss';
import { useState } from 'react';

const App = () => {
  const fruits = {
    1: 'Яблоко',
    2: 'Груша',
    3: 'Банан',
    4: 'Киви',
    5: 'Ананас',
    6: 'Папайя',
    7: 'Мандарин',
    8: 'Апельсин',
    9: 'Айва',
    10: 'Лимон',
  }

  const [result, setResult] = useState('Яблоко');

  const handleChange = (event) => {
    const id = event.target.value;

    for (const [key, value] of Object.entries(fruits)) {
      if (key === id) {
        setResult(value)
      } 
    }
    
    if (!Object.keys(fruits).includes(id)) {
      setResult('Не найдено')
    }

    if (!id) {
      setResult('')
    }
  }

  return (
    <div className="app">
      <form className="form">
        <div className="result">{result}</div>
        <input name="fruitId" defaultValue="1" onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;
