import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <p>Welcome to the Home page!</p>
        <p><Link to="game">Game</Link></p>
    </div>
  )
}

export default Home
