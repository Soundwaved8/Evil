import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useParams,
    Link
} from "react-router-dom";
import Characters from "../screens/characters";
import Login from '../screens/login'
import Favorites from "../screens/favorites";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, ultimeTheme } from './themes'
import { useState } from "react";
import Hero from "../screens/hero.js";
import Global from "./global";
import CharacterDetails from "../screens/charactersDetails";
import styled from "styled-components";

const Routes = () => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme)
    const switchTheme = (theme) => {
        setCurrentTheme(theme)
    }
    return (
        <ThemeProvider theme={currentTheme}>
            <Global/>
            <Router>
            <LinkContainer>
                <Link to="/favorites"> Héros favori</Link>
                <Link to="/heros"> Description des Personnages</Link>
                <Link to="/characters"> Choisir un héros du mal favori</Link>
            </LinkContainer>
            <br/>
             <ButtonContainer>
                <StyledButton onClick={() => switchTheme(lightTheme)}> light Theme</StyledButton>
                <StyledButton onClick={() => switchTheme(darkTheme)}> dark Theme</StyledButton>
                <StyledButton onClick={() => switchTheme(ultimeTheme)}> ultime pouvoir</StyledButton>
             </ButtonContainer>
                <Switch>
                    <Route exact path="/">
                        <Login></Login>
                    </Route>
                    <PrivateRoute exact path="/characters">
                        <Characters></Characters>
                    </PrivateRoute>
                    <PrivateRoute path="/characters/details">
                      <CharacterDetails ></CharacterDetails>
                  </PrivateRoute>
                    <PrivateRoute exact path="/favorites">
                        <Favorites></Favorites>
                    </PrivateRoute>
                    <PrivateRoute exact path="/heros">
                        <Hero></Hero>
                    </PrivateRoute>
                    <Redirect to="/"></Redirect>
                </Switch>
            </Router>
        </ThemeProvider>

    )
}

function PrivateRoute({ children, ...rest }) {
    const isToken = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isToken? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />)
}




export default Routes;

const LinkContainer = styled.div`
   display:flex;
   justify-content:space-between;
   padding-left:10%;
   padding-right:10%;
`

const ButtonContainer = styled.div`
  width:80%;
  display:flex;
  justify-content:space-between;
  padding-left:10%;
   padding-right:10%;

`

const StyledButton = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background:black;
  color:white;
  font-family:Zen Antique;
  width:100px;
  height:30px;
  border-radius:15px;
  padding:5px;
`

