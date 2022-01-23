import { Component, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
class SearchB extends Component {
  render() {
    return (
      <Form >
        <Form.Group className="mb-3 barC">
          <div className="groupInput">
            <Form.Control
              type="text"
              className="champInput"
              placeholder="Numero"
            ></Form.Control>
          </div>
          <div className="groupInput">
            <Form.Control
              type="submit"
              className="champInput"
              value="Recherche"
            ></Form.Control>
          </div>
        </Form.Group>
      </Form>
    );
  }
}
export default SearchB;
