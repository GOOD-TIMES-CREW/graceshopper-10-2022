import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// May have to come back and double check file path

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [inventory, setInventory] = useState("");
  const [system, setSystem] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    console.log(name, "YOOOOOOO");
    evt.preventDefault();
    dispatch(
      addProduct({
        name,
        description,
        imageUrl,
        price,
        genre,
        inventory,
        system,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="imageUrl"
          placeholder="ImageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="genre">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          type="genre"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="inventory">
        <Form.Label>Inventory</Form.Label>
        <Form.Control
          type="inventory"
          placeholder="Inventory"
          value={inventory}
          onChange={(e) => setInventory(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="system">
        <Form.Label>Product System</Form.Label>
        <Form.Control
          type="System"
          placeholder="Product system"
          value={system}
          onChange={(e) => setSystem(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddProduct;
