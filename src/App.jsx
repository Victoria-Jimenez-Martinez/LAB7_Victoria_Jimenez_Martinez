import './App.css'
import { CompWithProps } from './components/CompWithProps';
function App() {

  const user = "User : ";

  return (
    <>
      <div >
        <h1>Componente con Props</h1>
        <CompWithProps user={user} />
      </div>
    </>
  )
}

export default App
