import UserCard from "./UserCard"
import Wrapper from "./Wrapper"
function App() {
  const users = [
    {
      name:"Virat Kohli",
      role:"Batsman",
      country:"India"
    },
    {
      name:"Ms. Dhoni",
      role:"WK-Batsman",
      country:"India"
    }
  ]

  return (
    <>
      <h1>Users Dashboard</h1>
      <Wrapper title="Users List">
        {
          users.map((use,index)=>(<UserCard key={index} user={use}/>))
        }
      </Wrapper>
    </>
  )
}

export default App
