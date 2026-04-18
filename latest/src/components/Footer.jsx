import './Footer.css'

export default function Footer(props) 
{
  return (
    <footer className='footer'>
      <p>© {props.year[2]} {props.company.name}</p>
    </footer>
  )
}