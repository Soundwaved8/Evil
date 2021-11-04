import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from "react-router-dom";

const CharacterDetails = () => {

    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [] )
    const [isFavorite, setIsfavorite] = useState(false)
    const history = useHistory()

    const location = useLocation()

    useEffect(() => {
        isInFavorite(location.state?.character?.name)
    },[favorites])


    const isInFavorite = (name) => {
       const isFav = favorites.some(fav => fav.name === name)
       setIsfavorite(isFav)
    }


    const removeFavorite = (name) => {
        const newFavorite = favorites.filter(fav => fav.name !== name)
        localStorage.setItem('favorites', JSON.stringify(newFavorite)) 
        setFavorites(newFavorite) 
    }

    const  addFavorite = (character) => {
        const newArray = [...favorites, character]
        localStorage.setItem('favorites', JSON.stringify(newArray)) 
        setFavorites(newArray) 

    }

    const handleFavorite = (character) => {
        isFavorite ? removeFavorite(character.name) :  addFavorite(character) 
    }


    return (
        <div>
            <p onClick={() => history.goBack()}> retour</p>
                <p>{location.state.character.name}</p>
            <img src = {location.state.character.image}></img>
            <br/>
            <br/>
            <br/>
                <button onClick={() => {handleFavorite(location.state.character)}}>{isFavorite ?"remove from favorite" : "add to favorite"}</button>

        </div>
    );
};


export default CharacterDetails;