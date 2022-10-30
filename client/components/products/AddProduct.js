import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../store/products";
// May have to come back and double check file path

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productGenre, setProductGenre] = useState("");
  const [productInventory, setProductInventory] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      addProductAsync({
        productName,
        productDescription,
        productImageUrl,
        productPrice,
        productGenre,
        productInventory,
      })
    );
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="description" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImageUrl">
        <Form.Label>Image</Form.Label>
        <Form.Control type="imageUrl" placeholder="ImageUrl" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="price" placeholder="Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGenre">
        <Form.Label>Genre</Form.Label>
        <Form.Control type="genre" placeholder="Genre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicInventory">
        <Form.Check type="inventory" label="Inventory" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddCampus;
