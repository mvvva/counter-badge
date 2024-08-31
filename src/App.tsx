import Counter from './components/Counter';
import { CounterProvider } from './context/CounterContext';
import Badge from './components/Badge';

const App = () => {
  return (
    <CounterProvider>
      <div className="min-h-screen flex justify-center items-center flex-col bg-gray-100">
        <Counter />
        <h1 className='text-5xl mt-8'>Badge</h1>
        <div className="p-6 ">
          <Badge color="info" size="sm">Info Badge</Badge>
          <Badge color="failure" size="md">Failure Badge</Badge>
          <Badge color="success" size="lg">Success Badge</Badge>
        </div>
      </div>
    </CounterProvider>
    
  );
};

export default App;


