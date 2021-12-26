import React from 'React';
import axios from 'axios';
import { Modal, Form } from 'react-bootstrap';

class Add extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false,
      employeeName: '',
      value: ''
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

    handleShow () {
      this.setState({
        show: true
      })
    }

    handleClose () {
      this.setState({
        show: false
      })
    }

    handleChange (event) {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleClick (event, employee, value) {
      event.preventDefault();
      axios.post('/entries', {Name: employee, Salary: value}).then(() => {
        console.log('posted!')
        this.handleClose();
        alert('Posted! Please refresh page for updated list.')
      }).catch((err) => {
        console.log(err)
      })
    }

    render () {
      return (
        <>
          <button className="button" onClick={this.handleShow}>
            Add
          </button>
            <Modal show={this.state.show} onHide={this.handleClose}>

              <Modal.Header closeButton>
                <Modal.Title>Add Entry</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Control
                    onChange={(event) => {this.handleChange(event)}}
                    value={this.state.employeeName}
                    name="employeeName"
                    placeholder='Employee name (ex. John Doe)'/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                    onChange={(event) => {this.handleChange(event)}}
                    value={this.state.value}
                    name="value"
                    placeholder='Value (ex. 78000)'/>
                  </Form.Group>
                </Form>
              </Modal.Body>

              <Modal.Footer>
                <button className="button" onClick={() => {
                  this.handleClick(event, this.state.employeeName, this.state.value)
                  }}>Add</button>
              </Modal.Footer>

            </Modal>
        </>
      );
    }
}


export default Add;