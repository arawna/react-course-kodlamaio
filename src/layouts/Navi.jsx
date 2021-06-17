import React, {useState} from "react";
import CardSummary from "./CardSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthanticated, setIsAuthanticated] = useState(true)
  const history = useHistory()

  function handleSignOut() {
    setIsAuthanticated(false)
    history.push("/")
  }
  function handleSignIn() {
    setIsAuthanticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            
            {cartItems.length>0&&<CardSummary/>}
            {isAuthanticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}         
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
