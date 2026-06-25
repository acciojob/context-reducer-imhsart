import React, {useState, useContext, useRef} from 'react'
import { authContext } from '../Context/AuthContext'
import '../styles/App.css'
const App = () => {
  const {itemList, setItemList} = useContext(authContext)
  const [inputText, setInputText] = useState('')
  const [auth, setAuth] = useState('')
  const countRef = useRef(0)

  function handleSubmit(e){
    e.preventDefault()
    setItemList(prev => [...prev, {id: countRef.current, name: inputText}])
    countRef.current += 1
    setInputText('')
  }
  function handleClear(){
    setItemList([])
    countRef.current = 0
  }
  function handleDelete(idx){
    setItemList(itemList.filter(val => val.id !== idx))
  }
  function handleLogin(){
    setAuth('Current user:rohan, isAuthenticated: Yes')
  }
  function handleLogout(){
    setAuth('Current user:, isAuthenticated: No')
  }

  return (
    <div className='container'>
      <button id='login-btn' onClick={handleLogin}>Login</button>
      <button id='signout' onClick={handleLogout}>Signout</button>
      <form onSubmit={handleSubmit}>
          <input id='shopping-input' value={inputText} onChange={e => setInputText(e.target.value)} />
          <button type='submit' id='add-btn'>Add</button>
      </form>      
      <button id='clear-list' onClick={handleClear}>Clear List</button>
      <div id='current-user'><h3>{auth}</h3></div>
      <ul>
        {
          (itemList.length > 0) && 
          itemList.map(item => {
            return <li key={`item-${item.name}`} id={`item-${item.name}`}><h2>{item.name}</h2> <button onClick={() => handleDelete(item.id)} id={`remove-${item.name}`}>Remove</button></li>
          })
        }
      </ul>
    </div>
  )
}

export default App