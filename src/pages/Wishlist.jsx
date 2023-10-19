import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart,faTag,faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import StarRate from "../components/StarRate";
import { Link } from 'react-router-dom';
import { removefromWishlist } from '../redux/slices/wishlistSlice';
export default function Wishlist() {

  const items = useSelector((state)=>state.wishlistReducer)
  const dispatch =useDispatch();
  
  return (
    
      <div style={{ width: "100vw", minHeight: "100vh" }} className="p-5">
      <Row>
 
 {items?.length>0?(
  items?.map((item,index)=> (
    <Col key={index} className="mb-5" sm={6} md={6} lg={4} xl={3}>
    <Card style={{ width: "18rem",height:'27rem' }}>
      <div className="card-parent ">
        <Card.Img
        style={{width:"300px",height:"200px"}}
        className="img-fluid"
          variant="top"
          src={item?.thumbnail}
        />

          

        <div className="discount-tag">
        <FontAwesomeIcon icon={faTag} size="lg" style={{color: "black"}} />
        {item?.discountPercentage}% off
        </div>
      </div>

      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
      <StarRate/>
        <p><b>$</b>{item?.price}</p>
        <Card.Text>

          <p className="text-truncate">{item?.description}</p>
        </Card.Text>
       <div className='d-flex justify-content-between'>
          <Button variant="primary d-flex gap-2">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              style={{ color: "white" }}
            />{" "}
            Add to Cart
          </Button>

          <Button variant=" " onClick={()=>dispatch(removefromWishlist(item.id))}>
            <FontAwesomeIcon
              icon={faTrash}
              size="lg"
              style={{ color: "red" ,width:'50px' }}
            />
          </Button>
       </div>
      </Card.Body>
    </Card>
  </Col>
  ))
 )
 : <div className='wishlist-page'><h1>WishList is Empty</h1>
 <Button variant="success ">
          <Link to={'/'} style={{color:'black',textDecoration:'none'}}> Back To Home</Link>
          </Button>
 
 </div>
}
 
      </Row>
    </div>
  )
}
