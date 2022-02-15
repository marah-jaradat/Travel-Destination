import "./tour.css";

export default function tour(props) {
  return (
    <div>
      <p id="name">{props.data3.name}</p>
      <img src={props.data3.image} alt="data" />
      <hr></hr>
    </div>
  );
}
