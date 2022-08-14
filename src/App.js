//import logo from './logo.svg';
import './App.css';
import users from './users.json'
import Searchbox from'./Searchbox'
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
    </div>
  )
}
  

export default App;
