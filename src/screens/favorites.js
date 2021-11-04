import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Favorites = props => {
   
    const localStorageFavorite = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []
    const [favorites, setFavorites] = useState(localStorageFavorite)


    return (
        <div>
            <Ecriture>
            <h1>Favori</h1>
            {favorites.map(fav=> <p>{fav.name}</p>)}
            
            {favorites.map(fav=> <Image  src={fav.image}/>)}
    
            </Ecriture>
            </div>
            
            )
    } 

Favorites.propTypes = {
    
};
const Ecriture = styled.div`
text-align: center;
color: white;
`
const Image = styled.img`
height: 200px;
float: center;
`




export default Favorites;




