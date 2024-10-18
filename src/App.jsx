
import './App.css'
import Counter from './Conter'
import Friends from './friends'
import Team from './team'
import Users from './users'

function App() {
  function hendelClick() {
    alert("btn cliced")
  }
  const hendelClick2 = () => {
    alert("btn 2 cliked")
  }
  const hendelClick4 = (num) => {
    alert(num + 5 + 5)
  }

  return (
    <>

      <h1>React core consept</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={hendelClick}>click me</button>
      <button onClick={hendelClick2}>click me</button>
      <button onClick={() => { alert('btn 3 cliced') }}>click me</button>
      {/* funsoner modde pera mitar pathate chaile ja korte hobe */}
      <button onClick={()=>hendelClick4(5)}>click me</button>
    </>
  )
}

export default App
