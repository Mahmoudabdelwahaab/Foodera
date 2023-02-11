import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Footer = () => {
const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4trpb6l', 'template_9jq0qsm', form.current, 'LAkfsCiRN0LZSdpOq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <>
      <Container className='contact'>
        <h2>Contact Us</h2>
        <Row>
          <Col className='info' md={6} sm={6}>
          <p><span>Email:</span>mahmoudabdelwahaab0@gmail.com</p>
          <p><span>Phone:</span>+201013812733</p>
          <p><span>Address:</span>El-sharqia / Egypt</p>
          </Col>
          <Col md={6} sm={6}>
          <form ref={form} onSubmit={sendEmail}>
      <div><input type="text" name="name" placeholder='Name'/></div>
      <div><input type="email" name="email" placeholder='Email'/></div>
      <textarea name="message" placeholder='Message'/><br />
      <div><input type="submit" value="Send" /></div>
          </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer