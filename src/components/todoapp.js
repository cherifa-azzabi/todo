import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Card, InputGroup, FormControl, ListGroup } from "react-bootstrap";

export default class Todoapp extends Component {
  state = {
    list: [
      {
        id: 1,
        desc: "to do 1",
        isComplete: false
      },
      {
        id: 2,
        desc: "cherifa",
        isComplete: false
      }
    ],
    input: ""
  };
  handelChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  additem = e => {
    e.preventDefault();
    if (this.state.input) {
      this.setState({
        list: [
          ...this.state.list,
          { id: Date.now(), desc: this.state.input, isComplete: false }
        ],
        input: ""
      });
    } else alert("ne marche pas");
  };
  deleteItem = i => {
    console.log(i);
    this.setState({
      list: this.state.list.filter(el => el.id !== i)
    });
  };

  complete = i => {
    this.setState({
      list: this.state.list.map((el, index) =>
        el.id === i ? { ...el, isComplete: !el.isComplete } : el
      )
    });
  };

  render() {
    return (
      <div>
        <Card bg="primary">
          <Card.Body>
            <h1 className={"text-white"}>To-Do-App !</h1>
            <Form onSubmit={this.additem}>
              <Form.Group>
                <InputGroup className="mb-3">
                  <FormControl
                    aria-label="Recipient’s username"
                    aria-describedby="basic-addon2"
                    value={this.state.input}
                    onChange={this.handelChange}
                  />
                  <InputGroup.Append>
                    <Button variant="success" onClick={this.additem}>
                      +
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <ListGroup>
          {" "}
          {this.state.list.map((el, i) => (
            <ListGroup.Item key={i} className="flex">
              <p className={el.isComplete ? "Complete" : ""}>{el.desc}</p>
              <Button
                variant="secondary"
                style={{ display: "inline" }}
                className={this.state.isComplete ? "Complete" : ""}
                onClick={() => this.complete(el.id)}
              >
                {el.isComplete ? "undo" : "Complete"}
              </Button>
              <Button variant="danger" onClick={() => this.deleteItem(el.id)}>
                Delete
              </Button>
            </ListGroup.Item>
          ))}{" "}
        </ListGroup>
      </div>
    );
  }
}
