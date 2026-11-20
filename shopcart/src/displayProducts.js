import { useState } from "react";
import { Modal } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImge(product);
  };

  return (
    <div>
      <div className="sort-by d-flex justify-content-center align-items-center my-4">
        <label htmlFor="sort-price" className="m-0 mr-3">
          Sort Price By:
        </label>
        <select
          id="sort-price"
          value={props.sortType}
          onChange={(e) => props.onSort(e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <ListGroup>
        {props.products.map((product) => (
          <ListGroupItem key={product.id} className="product rounded-0">
            <h5 className="product-name">
              {product.desc}
              <span className="product-price text-danger ml-3">
                ${product.price}
              </span>
            </h5>
            <div className="d-flex align-items-center">
              <img
                src={product.image}
                alt={product.desc}
                className="product-image"
                onClick={() => handleShow(product)}
              />
              <button
                className="btn btn-secondary btn-qty ml-4"
                onClick={() => props.onIncrement(product)}
              >
                <FontAwesomeIcon icon={faPlusCircle} />
              </button>
              <button
                className="btn btn-secondary btn-qty ml-2"
                onClick={() => props.onDecrement(product)}
              >
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>
              <div className="quantity ml-4">
                <span className="quantity-label">Quantity</span>
                <span className="quantity-box">{product.value}</span>
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImge.image}
            width="350"
            alt={showImge.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings:</span> {showImge.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;
