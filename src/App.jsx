import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Game from './Game'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default App
