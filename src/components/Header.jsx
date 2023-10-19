import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
export default function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  return (
    <>   <Navbar bg="primary" style={{position:'fixed',width:"100%",zIndex:'99'}} data-bs-theme="dark">
    <Container>
      <Link to={"/"} style={{textDecoration:'none',overflow:'hidden'}} ><Navbar.Brand >E-cart</Navbar.Brand></Link>
      <Nav className=" d-flex gap-3">         
     {/* <Nav.Link ><Link to={"/"} style={{textDecoration:'none',color:'white'}}> Home  </Link></Nav.Link> */}
        <button className='btn ' ><Link to={"/wishlist"} style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faHeart} size="lg" style={{color: "#ff0000",}} /> Wishlist (<span >{wishlist.length}</span>) </Link></button>
      <button className='btn' ><Link to={"/cart"} style={{textDecoration:'none',color:'white'}}> <FontAwesomeIcon icon={faCartShopping} size='lg'  style={{color: "white"}} /> <sup style={{backgroundColor:'red',padding:'1px'}} className='rounded'>10</sup>{""} Cart </Link></button>
      </Nav>
    </Container>
  </Navbar></>
  )
}
