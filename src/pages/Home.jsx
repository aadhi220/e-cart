import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { Card,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeart } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <div style={{width:'100vw',minHeight:'100vh'} } className='p-5'>
    <Row>
<Col>
<Card style={{ width: '18rem' }}>
      <div className='card-parent'><Card.Img  variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f9d52817f7524d3fb442af3b01717dfa_9366/Runfalcon_3.0_Shoes_Black_HQ3790_01_standard.jpg" />
      
      <div className='wishlist-icon'><FontAwesomeIcon icon={faHeart} size="lg" style={{color: "#ff0000",}} /></div>
      </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.<p></p>
        </Card.Text>
        <Button variant="primary d-flex gap-2"><FontAwesomeIcon icon={faCartShopping} size='lg'  style={{color: "white"}} />  Add to Cart</Button>
      </Card.Body>
    </Card>

    
</Col>

    </Row>
    
     </div>
  )
}
