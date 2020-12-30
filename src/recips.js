import React from 'react';

const Details = ({title , doc , src , ingredients}) => {
    
    return(
        
        <div className='recipe'>
            <h1>{title}</h1>
            {ingredients.map((ing , index) => {
            return <ul key={index}> <li>{ing}</li> </ul>
            })}
            <p>{doc}</p>
            <img src={src} />
        </div>
    )
}

export default Details;