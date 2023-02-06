import './styles/global.css'
import {Habit} from "./components/Habit"
function App() {
  
  return (
    <>
    <h1>Habit Tracker</h1>
    <Habit completed={3}/>
    <Habit completed={15}/>
    <Habit completed={10}/>
    <Habit completed={20}/>
    <Habit completed={30}/>
    </>
  )
}

export default App


// Componente: Reaproveitar / isolar
// Propriedade: Uma informação enviada para modificar um componente visual ou comportamentalmente