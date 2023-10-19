import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function StarRate() {
  return (
    <div>  <span style={{backgroundColor:'gold'}}><FontAwesomeIcon icon={faStar} size="xs" style={{color: "transparent"}} className="star" /> <i class="fa-regular fa-star fa-xs" style={{color: "#000000"}}></i></span></div>
  )
}
