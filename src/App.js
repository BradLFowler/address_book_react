import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsersCard from './UsersCard';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://randomuser.me/api?results=25")
    .then((res) => {
      return setUsers(res.data.results)
    })
  }, [])

  return (
    <div className='app'>
      <header className='appHeader'>Contacts</header>
      <ul className='usersList' style={{"listStyle": "none"}}>
        {users.map((user, index) => (
        <UsersCard key={index} firstName={user.name.first} lastName={user.name.last} picture={user.picture.large} phone={user.phone} 
        cell={user.cell} streetNum={user.location.street.number} streetName={user.location.street.name} state={user.location.state} 
        country={user.location.country} />
        ))}
      </ul>
    </div>
  )
}

export default App;