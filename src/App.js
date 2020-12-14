import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary';
import {History} from './components/History';
import {AddComponent} from './components/AddComponent';
import './App.css';

// importing provider
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
   
      <Header />
      <div className="container">
        <Balance/>
        <AccountSummary />
        <History />
        <AddComponent />
      </div>
    
    </GlobalProvider>
  );
}

export default App;
