import './Header.css'

export default function Header(props) 
{
  return (
    <header className='navigation'>
      <h1>{props.title}</h1>
    <nav>
        <a href="#">Home </a>
        <a href="#">Address </a>
        <a href="#">Contact </a>
    </nav>
    </header>
  )
}