import React from 'react';
import {Container , Row ,Col } from 'react-bootstrap';
import '../Home.css';
import NavBar from '../componants/NavBar';
import first from '../Asets/images/christophe-rollando-QM2Exov4E2Q-unsplash.jpg';
import imgone from '../Asets/images/1.png';
import imgtwo from '../Asets/images/2.png';
import Data from '../componants/Data';
import {Carousel} from 'react-bootstrap';
import item1 from '../Asets/images/IMG_20210511_124731_796.jpg';
import item2 from '../Asets/images/1.jpg';
import Footer from '../Footer';




const Home = () => {
  const blogItem = Data.map((item, index)=>{
    return(
      <Col key= {index} md={4} sm={12}>
        <img src={item.img} alt="img" />
            <h4>{item.title}</h4>
            <span>Time: {item.time}</span>
            <h6>{item.price}</h6>
            <button>Order Now</button>
      </Col>
    )
  })
  return (
    <>
    <NavBar />
      <header id='Home'>
        <Container>
          <Row>
          <Col md={5} sm={12}>
          <h2>Good food choices are good investments.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
          <button className='bt-left' >Order now</button>
          <button className='bt-right'>Learn more </button>
          </Col>

          <Col md={7} sm={12}>
          <img src={first} alt="" />
          </Col>
          </Row>
        </Container>
      </header>

      <section className="numbers">
        <Container>
          <Row>
            <Col>
              <h3>1256+</h3>
              <h6>SAVING</h6>
            </Col>
            <Col>
              <h3>9675+</h3>
              <h6>PHOTOS</h6>
            </Col>
            <Col>
              <h3>2145+</h3>
              <h6>ROCKETS</h6>
            </Col>
            <Col>
              <h3>2375+</h3>
              <h6>GLOBES</h6>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-one' id='About Us'>
        <Container>
          <Row>
            <Col md={6} sm={12}>
            <img src={imgone} alt="" />
            </Col>
            <Col  md={6} sm={12}>
              <h2>We pride ourselves on making real food from the best ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et purus a odio finibus bibendum amet leo.
              </p>
              <button>Learn More</button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='ingredients'>
        <Container>
          <Row>
            <Col  md={6} sm={12}>
            <h2>We make everything by hand with the best possible ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et purus a odio finibus bibendum in sit amet leo.<br/> Mauris feugiat erat tellus.Far far away, behind the word<br/> mountains, far from the countries Vokalia and Consonantia,<br/> there live the blind texts.
            </p>
            <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button>Learn More</button>
            </Col>
            <Col  md={6} sm={12}><img src={imgtwo} alt="" /></Col>
          </Row>
        </Container>
      </section>
      <section className='pride'>
        <Container>
          <Row>
            <Col md={12} sm={12}>
              <h2>When a man's stomach is full it makes no<br/>difference whether he is rich or poor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='blogs' id='Explore Food'>
        <Container>
          <Row>
            <Col lg={12} md={12}>
            <h2>Explore Our Foods</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </Col>
          </Row>
          <Row>
            {blogItem}
          </Row>
        </Container>
      </section>
      <section className='slider' id='Reviews'>
        <Container>
        <Row>
            <Col lg={12} md={12}>
            <h2>Testimonials</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carousel>
                    <Carousel.Item>
                      <img src={item1}  alt=""/>
                      <Carousel.Caption>
                        <h3>It was a good food and the staff are freindly in resturant</h3>
                        <p>Mahmoud Ahmed frontend developer </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={item2}  alt=""/>
                      <Carousel.Caption>
                        <h3>The Delevery is faster and the food was fresh</h3>
                        <p>Jessy Backend developer</p>
                      </Carousel.Caption>
                    </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section id='Contact'>
        <Footer />
      </section>
    </>
  )
}

export default Home