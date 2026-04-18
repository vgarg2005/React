import './Header.css'

export default function Header({card}) 
{
  return (
    <header className='navigation'>
      {card}
    <nav>
      <a href="#">Home </a>
      <a href="#">Address </a>
      <a href="#">Contact </a>
    </nav>
    </header>
  )
}