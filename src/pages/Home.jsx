import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart,faTag } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
export default function Home() {
  const items = useFetch("https://dummyjson.com/products");
  // console.log(items);
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }} className="p-5">
      <Row>
 
 {items?.length>0?(
  items?.map((item,index)=> (
    <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
    <Card style={{ width: "18rem",height:'27rem' }}>
      <div className="card-parent ">
        <Card.Img
        style={{width:"300px",height:"200px"}}
        className="img-fluid"
          variant="top"
          src={item?.thumbnail}
        />

        <div className="wishlist-icon">
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            style={{ color: "#ff0000" }}
          />
        </div>

        <div className="discount-tag">
        <FontAwesomeIcon icon={faTag} size="lg" style={{color: "black"}} />
        {item?.discountPercentage}% off
        </div>
      </div>

      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
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
  ))
 )
 : <div>No products</div>
}
 
      </Row>
    </div>
  );
}
