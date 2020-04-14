import React from 'react';
import Timer from './components/timer';
import '../src/App.css'

function App() {
  return (
    <div className="App">
      <Timer time="60"
      autoStart={false}
      onTick={(time) => console.log("Осталось времени: " + time)}
      step="1000"
      onTimeEnd={() => console.log("Время вышло!")}
      onTimeStart={(timeLeft) => console.log("Таймер запущен!")}
      onTimePause={(timeLeft) => console.log("Таймер на паузе!")}
      />
    </div>
  );
}

export default App;
