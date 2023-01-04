import React from 'react';
import Card from 'react-bootstrap/Card';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLaptopCode } from 'react-icons/fa';
import { GiPaintBrush} from 'react-icons/gi';

const Home = () => {
    return(
       <>
       <div className="container-fluid">
       <div className="section1 row">
          <div className='col-md-4'>
            <h3>Hi there! </h3>
            <h1>I'm Pires</h1>
          {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2012%2F09%2F10%2F13853%2Fbac795c7b3b215ca5e868d5085f1710a.jpg&f=1&nofb=1&ipt=ba797442c03a723447207b2b867ac4aec1c973a75e54c011a85382c45429df48&ipo=images" alt="" /> */}
          </div>
          <div className='col-md-8'>
          {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2012%2F09%2F10%2F13853%2Fbac795c7b3b215ca5e868d5085f1710a.jpg&f=1&nofb=1&ipt=ba797442c03a723447207b2b867ac4aec1c973a75e54c011a85382c45429df48&ipo=images" alt="" /> */}
          </div>
        </div>
        <div className="about-me row mt-4">
          <div className='col-md-4'>
            <h3>Who am i? </h3>
          </div>
          <div className='col-md-8'>
              <p>We start strong with a philosophical question. What is being someone? What is being? What is I? 
Well for now lets stick to what how you most likely interpret this question. I’m Pires, I am a beginner web developer and web designer. Currently trying to find some freelancing work as a React developer.</p>
          </div>
        </div>
          
        <div className="section2 row mt-4 mb-5 justify-content-evenly">
          <Card class="ms-auto me-auto" style={{ width: '18rem' }}>
            <Card.Header><FaLaptopCode size="s" /></Card.Header>
            
            <Card.Body>
              <Card.Title>Web developer</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Header><GiPaintBrush size="xs" /></Card.Header>
            <Card.Body>
              <Card.Title>Web designer</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        </div>

      </>)
  };
  
export default Home;
  