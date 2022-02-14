export default function Tour(props) {
  return (
    <>
      <h1>Tours: </h1>
      {props.data.map((object) => {
        return (
          <div key={object.id}>
            <h2>{object.name}</h2>
            <img src={object.image} alt={object.name} />
          </div>
        );
      })}
    </>
  );
}
