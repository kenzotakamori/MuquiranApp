import './App.css';
import FINANCES_MOCK from './finances-mock.json';

const App = () => {
  const finances = FINANCES_MOCK.map(line => (
    <div>
      <span>
        {line.description}: {line.amount} ({line.date})
      </span>
    </div>
  ))

  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <main>
        {finances}
      </main>
    </div>
  );
}

export default App;
