import { useContext, useState } from 'react';
import { CounterContext } from '../context/CounterContext';

const Counter = () => {
  const context = useContext(CounterContext);
  const [inputValue, setInputValue] = useState<string | number | ''>('');

  if (!context) {
    throw new Error('Counter must be used within a CounterProvider');
  }

  const { state, dispatch } = context;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setInputValue('');
    } else {
      setInputValue(Number(value));
    }
  };

  const handleIncrement = () => {
    const value = typeof inputValue === 'number' ? inputValue : undefined;
    dispatch({ type: 'INCREMENT', payload: value });
  };

  const handleDecrement = () => {
    const value = typeof inputValue === 'number' ? inputValue : undefined;
    dispatch({ type: 'DECREMENT', payload: value });
  };

  const handleReset = () => {
    setInputValue('');
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-4">Count: {state.count}</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="mt-4">
        <input
          type="number"
          className="px-2 py-1 border rounded"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Increment by..."
        />
      </div>
    </div>
  );
};

export default Counter;

