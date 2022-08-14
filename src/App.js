//import logo from './logo.svg';
import './App.css';
import CardList from './component/CardList';
import Footer from './component/Footer';
import Searchbox from './component/Searchbox';
import users from './users.json'
import {useState} from 'react'
function App() {  
  const[searchInput, setSearchInput] = useState('')
  const[searchuser, setSearchUser] = useState([])
  
  const updateSearchInput = (event) =>{
    let target  = event.target.value
    setSearchInput(target)

    const filteredRobots = target ? users.filter(user => (
      user.login.toLowerCase().includes(target.toLowerCase()) 
    )): []

    setSearchUser([...filteredRobots])
    
  }

  return (
   
    <div>
      <Searchbox updateSearchInput = {updateSearchInput}/>
      <CardList  users = {searchInput ? searchuser : users}/>
      <Footer />
    </div>
  );
}

export default App;
