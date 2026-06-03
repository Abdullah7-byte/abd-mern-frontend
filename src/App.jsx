import { useState, useEffect } from 'react'
import AddUser from './AddUser'
import UserList from './UserList'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const addUser = () => {
      fetch('https://abd-mern-backend.onrender.com/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body : JSON.stringify({name: name})

        }) .then(() => fetchUser())
      }
    
  const deleteUser = (id) => {
      fetch(`https://abd-mern-backend.onrender.com/users/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
      }). then(() => fetchUser())
    }
  const fetchUser = () => {
    fetch('https://abd-mern-backend.onrender.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }
  useEffect(() => {
    fetchUser()

  }, [])


  return (
    <div className="app-container">
      <div className="app-inner">
        <h1 className="centered">Users</h1>
        <AddUser name={name} setName={setName} addUser={addUser} />
        <UserList users={users} deleteUser={deleteUser} />
      </div>
    </div>
  )
}

export default App