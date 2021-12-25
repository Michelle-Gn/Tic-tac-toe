import React from 'React';

class Add extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }

    render() {
      return (
        <>
          <button className="button" onClick={handleShow}>
            Add
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Entry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>{`${props.info.country} is a country in ${props.info.subregion} with a population of ${props.info.people}. Its capital is ${props.info.capital} and its currency is the ${props.info.currency}. Hope we can take a trip there someday!`}</div>
              <Form>
                <Form.Group>
                  <Form.Control
                  onChange={
                    (e) => {setNumber(e.target.value)}
                  }
                  value={this.state.employeeName}
                  placeholder='Employee name (ex. John Doe)'/>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                  onChange={
                    (e) => {this.setState({
                      value: 0
                    })}
                  value={this.state.value}
                  placeholder='Value (ex. 78000)'
                  }/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={(e) => {
                e.preventDefault()
                sendMessage(props.info.country, props.info.capital, props.info.subregion, props.info.currency, props.info.people, phoneNumber)
                .then((result) => console.log('message sent!'))
                .catch((error) => console.log(error))
              }}>Send!</button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

  }
}

export default Add;