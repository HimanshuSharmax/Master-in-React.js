import Card from './components/Card.jsx'


function App() {

  let myObj = {
    userName: "Himanshu",
    age: 23
  }

  let about1 = "I am akay | MERN STACK"
  let about2 = "I am Vedant | Software Developer"

  return (
    <>
      <h1 className='bg-green-400 text-black m-4 p-5 rounded-xl'>tailwindcss</h1>
      <Card userName="Akay" obj={myObj} btnText="Click me" about={about1}/>
      <Card userName="Vedant" about={about2}/>
    </>
  )
}

export default App
