import Nav from './components/nav/Nav';
import FinanceBar from './components/financeBar/FinanceBar';
import Home from './components/home/Home';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <FinanceBar />
      <Home />
    </div>
  );
};

export default App;
