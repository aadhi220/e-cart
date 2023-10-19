import React from 'react'
import { Col,Card } from 'react-bootstrap'


import {  Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart,faTag } from "@fortawesome/free-solid-svg-icons";


import { addToWishList } from "../redux/slices/wishlistSlice";
import StarRate from "../components/StarRate";

export default function ({item,index,dispatch}) {
  return (
    <>
     <Col key={index} className="mb-5" sm={6} md={6} lg={4} xl={3}>
    <Card style={{ width: "18rem",height:'28rem' }}>
      <div className="card-parent ">
        <Card.Img
        style={{width:"300px",height:"200px"}}
        className="img-fluid"
          variant="top"
          src={item?.thumbnail}
        />

        <button onClick={()=>dispatch(addToWishList(item))} className="wishlist-icon">
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            style={{ color: "#ff0000" }}
          />
        </button>

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
        <Button variant="primary d-flex gap-2">
          <FontAwesomeIcon
            icon={faCartShopping}
            size="lg"
            style={{ color: "white" }}
          />{" "}
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  </Col>
    
    
    </>
  )
}
