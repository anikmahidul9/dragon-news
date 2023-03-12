import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthProvidor";

const Register = () => {
    const {createUser,updateUser,verifyEmail} = useContext(AuthContext);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(photoUrl,name)
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            handleUserProfile(name,photoUrl);
            handleEmailVerification();
        })
        .catch(error=>console.error(error))
    }
    const handleUserProfile = (name,photoUrl)=>{
      const profile = {
        displayName:name,
        photoURL:photoUrl
      }
      updateUser(profile)
      .then(()=>{ })
      .catch(error=>console.error(error))
    }
    const handleEmailVerification  = () => {
      verifyEmail()
      .then(() =>{})
      .catch(error => console.error(error));
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmailn">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailp">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoUrl" type="text" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default Register;
