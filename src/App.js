import './App.scss';
import { useState } from 'react';

const App = () => {
  const fruits = [
    { id: 1, value: 'Яблоко' },
    { id: 2, value: 'Груша' },
    { id: 3, value: 'Банан' },
    { id: 4, value: 'Киви' },
    { id: 5, value: 'Ананас' },
    { id: 6, value: 'Папайя' },
    { id: 7, value: 'Мандарин' },
    { id: 8, value: 'Апельсин' },
    { id: 9, value: 'Айва' },
    { id: 10, value: 'Лимон' },
  ]

  const [result, setResult] = useState('Яблоко');

  const handleChange = (e) => {
    const chosenFruit = fruits.find( fruit => fruit.id == e.target.value)
    setResult(chosenFruit ? chosenFruit.value : 'Не найдено')
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
