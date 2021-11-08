import { useEffect, useState } from "react"
import king from '../jaden.png';
import edge from '../edge.png';
import devil from '../devil.png';
import gaia from '../gaia.png';
import bane from '../bane.png';
import styled from 'styled-components';
import { useHistory } from "react-router";


const Characters = () => {
    const [charactersList, setChararctersList] = useState([
    {name: 'Supreme King',image:king, id :0,},
    {name: 'Lame Malveillante, Héros du mal',image:edge, id :1,},
    {name: 'Démon Malveillant, Héros du mal',image:devil, id :2,},
    {name: 'Gaia Sombre, Héros du mal',image:gaia, id :3,},
    {name: 'Fléau Malveillant, Héros du mal',image:bane, id :4,}])    
    const [inputValue, setInputValue] = useState('')
    const history = useHistory()

    useEffect(() => {
        console.log('inputValue', inputValue)
    })
    
        
    
        const toEvil = (character) => {
            history.push('/characters/details', {character: character})
        }

return(
    <div>
        <div>
        
        <Ecriture>
        <p>Choissit ton héros du mal favori</p>
        </Ecriture>
{charactersList.map(characters => {
    return(
        <div>
        <Ecriture>
        <p onClick={() => toEvil(characters)}>{characters.name}</p>
        <Image onClick={() => toEvil(characters)}src={characters.image}>
        </Image>
        </Ecriture>
        </div>
        
    )
})
}
</div>
    )
    </div>
    
)
}


const Image = styled.img`
height: 200px;
float: center;
`

const Ecriture = styled.div`
text-align: center;
color: white;
`

export default Characters