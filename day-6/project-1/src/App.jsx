import Hey from './components/hey'
import logo from './assets/react.svg'

function App() {

  return(
    <>
      <Hey name={"joel"}/>
      <Hey name={"yedhu"}/>
      <Hey name={"melbin"}/>
      <Hey />
      <center><img src={logo} alt="" /></center>
    </>
  )
}

export default App
