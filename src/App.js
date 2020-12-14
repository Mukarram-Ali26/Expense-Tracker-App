import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary';
import {History} from './components/History';
import {AddComponent} from './components/AddComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance/>
        <AccountSummary />
        <History />
        <AddComponent />
      </div>
    </div>
  );
}

export default App;
