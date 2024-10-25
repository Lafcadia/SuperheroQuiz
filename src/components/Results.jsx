import { UserContext } from "./UserContext";
import { useContext } from 'react';

export default function Results({ element, artwork }) {

    const { name } = useContext(UserContext)

    return (
        <div>
          <p>
            <strong>{name}</strong>, your superhero is: {element}
          </p>
          {artwork ? (
            <div className="artwork">
              <h2>{artwork.title}</h2>
              <img src={artwork.primaryImage} alt={artwork.title} />
              <p>{artwork.artistDisplayName}</p>
              <p>{artwork.objectDate}</p>
            </div>
          ) : (
            <p>No artwork found.</p>
          )}
        </div>
      );
}