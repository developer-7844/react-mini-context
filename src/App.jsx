import './App.css'
import { Login } from './Components/Login'
import { Profile } from './Components/Profile'
import UserCotextprovider from './context/UserContextProvider'

function App() {

  return (
    <UserCotextprovider>
      <h1 className='bg-slate-700 text-white'> React Mini Context </h1>
      <Login />
      <Profile />
    </UserCotextprovider>
  )
}

export default App
