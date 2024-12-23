import './App.css';
import Accordion from './components/Accordion';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      question: "What's your name?",
      answer: "My name is TaluDev",
      active: false, // Manejo inicial del estado activo
    },
    {
      id: 2,
      question: "What do you do?",
      answer: "I'm a FullStack Developer",
      active: false,
    },
  ]);

  // Función para manejar el cambio de estado activo
  const toggleActive = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, active: !item.active } : { ...item, active: false }
      )
    );
  };

  return (
    <div className="bg-[#f2f2f2] h-screen flex justify-center items-center">
      <div className="list">
        {list.map((item) => (
          <Accordion
            key={item.id}
            data={item}
            toggleActive={() => toggleActive(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

