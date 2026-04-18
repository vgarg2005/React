export default function Events(props)
{
  return (
    <div>
    <img src={props.image} alt="event" className="card-img" />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <span className="category">{props.category}</span>
    </div>
  );
}