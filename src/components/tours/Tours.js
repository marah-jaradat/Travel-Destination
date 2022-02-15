import './Tours.css'
import Tour from './tour/Tour';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Tour(props) {
  return (
    <>
      <h1>Tours: </h1>
      {props.data.map((object) => {
        return (
          <div key={object.id}>
          <Link to = {`/data/${object.id}`}> 
          <Tour key={object.id} data3={object}/>
                        {/* </Link> */}
            <h2>{object.name}</h2>
            <img src={object.image} alt={object.name} />
          </div>
        );
      })}
    </>
  );
}
