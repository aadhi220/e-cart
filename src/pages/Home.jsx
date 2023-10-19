import React from "react";
import { Row } from "react-bootstrap";

import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";

import ProductCard from "../components/ProductCard";
export default function Home() {
  const items = useFetch("https://dummyjson.com/products");
  // console.log(items);
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }} className="p-5">
      <Row>
        {items?.length > 0 ? (
          items?.map((item, index) => (
            <ProductCard item={item} index={index} dispatch={dispatch} />
          ))
        ) : (
          <div>No products</div>
        )}
      </Row>
    </div>
  );
}
