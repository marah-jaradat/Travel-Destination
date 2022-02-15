import './Tours.css'
import Tour from './tour/Tour';
import { Link } from 'react-router-dom';
export default function Tour(props) {
  return (
    <>
      <h1>Tours: </h1>
      {props.data.map((object) => {
        return (
          <Link to = {`/data/${object.id}`}> 
                        <Tour key={object.id} data3={object}/>
                        {/* </Link> */}
          <div key={object.id}>
            <h2>{object.name}</h2>
            <img src={object.image} alt={object.name} />
          </div>
        );
      })}
    </>
  );
}
