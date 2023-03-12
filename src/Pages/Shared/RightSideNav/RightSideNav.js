import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaReddit,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvidor";
import BrandCarosel from "../BrandCarosel/BrandCarosel";

const RightSideNav = () => {
  const {Providerlogin} = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const googleLogin = () =>{
    Providerlogin(provider)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>console.error(error));
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={googleLogin} className="mb-2" variant="outline-info">
          <FaGoogle /> Sign in Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Sign in Github
        </Button>
      </ButtonGroup>
      <div className="mt-2">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twiter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> What's App
          </ListGroup.Item>
          <ListGroup.Item>
            <FaReddit /> Reddit
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarosel></BrandCarosel>
    </div>
  );
};
export default RightSideNav;
