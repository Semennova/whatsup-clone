import React from 'react'
import Dashboard from './Dashboard';
import useLocalStorage from './hooks/useLocalStorage';
import Login from './Login';
import { ContactsProvider } from '../Contexts/ContactsContext'


function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )

  return (
    <div className='d-flex' style={{ height: '100vh' }}>
      {id ? dashboard : <Login onIdSubmit={setId} />}
    </div>


  )
}

export default App;
