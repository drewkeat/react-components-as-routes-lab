import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map(movie => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
      {/* make a new <div> for each actor. The <div> should contain the actor's name and a <ul> with a list of their movies. */}
    </div>
  );
};

export default Actors;
