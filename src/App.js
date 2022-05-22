import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AccountForm from './components/AccountForm';
import AccountList from './components/AccountList';

function App() {

  const [accounts,setAccounts] = useState([])
  const [accountSelected,setAccountSelected] = useState(null);
  const [id,setId] = useState(null)

  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(r=>setAccounts(r.data))
  },[])

  const getAccounts= () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((r) => setAccounts(r.data));
  };

  const deleteAccounts = (accountId)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${accountId}/`)
      .then(() => {
          getAccounts()
          deselectAccount()
      })
      .catch((error) => console.log(error.response))
  }

  const selectAccount = (account) => setAccountSelected(account)
  const deselectAccount = () => setAccountSelected(null)
  const getID = (id) => setId(id)

  return (
    <div className="App">
      <div className='container-fluid'>
        <AccountForm getAccounts={getAccounts} accountSelected={accountSelected} deselectAccount={deselectAccount} getId={getID} selectAccount={selectAccount}/>
        <AccountList accounts={accounts} selectAccount={selectAccount} deleteAccounts={deleteAccounts} getId={getID} id={id} deselectAccount={deselectAccount}/>
      </div>
    </div>
  );
}

export default App;
