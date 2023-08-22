import './App.css'
import Basic from './pre-app'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Basic/>}/>
    </Routes>
  )
}
export default App
