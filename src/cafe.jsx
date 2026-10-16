function Cafe(props) {
  return (
    <div className="cafe">
      <img src={props.image} alt={props.title} width="200" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <strong>Ingredientes:</strong>
      <ul>
        {props.ingredients?.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cafe;