import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return(
       <>
       <div className="section1 row ">
          <div className='col-md-4'>
            <h3>Hi there! </h3>
            <h1>I'm Pires</h1>
          {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2012%2F09%2F10%2F13853%2Fbac795c7b3b215ca5e868d5085f1710a.jpg&f=1&nofb=1&ipt=ba797442c03a723447207b2b867ac4aec1c973a75e54c011a85382c45429df48&ipo=images" alt="" /> */}
          </div>
          <div className='col-md-8'>
          {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2012%2F09%2F10%2F13853%2Fbac795c7b3b215ca5e868d5085f1710a.jpg&f=1&nofb=1&ipt=ba797442c03a723447207b2b867ac4aec1c973a75e54c011a85382c45429df48&ipo=images" alt="" /> */}
          </div>
        </div>
        <div className="section2 row mt-3">
          <div className='col-md-4 justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className='col-md-4 justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className='col-md-4 justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
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
  