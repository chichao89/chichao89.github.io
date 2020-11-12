import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'




function CoffeeDetails(props) {


    const coffeeDetails = props.product.filter(key => (key.id === props.warn)).map( selected => (
        <Row>
          <Col lg={5} key={selected.id}>
          <img className="img-fluid" src={selected.img} alt={selected.img}/>
          </Col>
          <Col lg={5}>
          <div className="m-3"><h1 className="text-uppercase font-weight-bold text-left">{selected.title}</h1></div>
          <div className="m-3"><h5 className="text-uppercase text-left">{selected.subheading}</h5></div>
          <div className="m-3"><p className="text-left"><span className="text-uppercase text-light bg-dark">{selected.category}</span></p></div>
          <div className="m-3"><hr/></div>
          <div className="m-3"><p className="single text-justify">We only sell whole coffee beans in our web shop. The coffee bean is less fragile, it will better preserve its flavour and aroma in our special valved bags, this will give you the best quality when brewing your coffee at home.</p></div>
          <Row className="m-3">
          <Col lg={5}><div className="m-1"><h6 className="text-uppercase font-weight-bold text-left">Weight Bag</h6></div>
          <div className="m-1">
          <Form.Control as="select">
          <option value>Choose an option</option>
          <option value={selected.weightbag[0]} selected>{selected.weightbag[0]}</option>
          <option value={selected.weightbag[1]}>{selected.weightbag[1]}</option>
          </Form.Control>
          </div>
          </Col>
          <Col lg={5}>
          <div className="m-1"><h6 className="text-uppercase font-weight-bold text-left">Quantity</h6></div>
          <div className="m-1">
          <Form.Control type="number" min="1" max={selected.quantity}/>
          </div>
          </Col>
          <Col lg={2}>
          <div className="m-1"><h6 className="text-uppercase font-weight-bold text-left">Total</h6></div>
          <div className="m-1">
          <p>{selected.price}</p>
          </div>
          </Col>
          </Row>
          <Row className="m-3">
            <Col>
          <div>
            {selected.quantity === 0 ? (
              <div className="float-left"><small className="text-danger">This item is Out of Stock!</small></div>
            ) : (
              <div className="float-left"><button>Add to Cart</button></div>
              )}  
          </div>
          </Col>
          </Row>
          <Row>
            <Col>
          <div className="m-3"><hr/></div>
          </Col>
          </Row>
          <Row>
            <Col>
            <div className="m-3"><h5 className="text-uppercase text-left">Character</h5></div>
            <div className="m-3"><p className="single text-justify">{selected.description}</p></div>
          </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Farmers</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.farmers}</p></div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Region</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.region}</p></div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Origin</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.origin}</p></div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Havest</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.harvest}</p></div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Process</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.process}</p></div>
            </Col>
          </Row>
        </Col>
      </Row>
    ))
      
    if (!props.warn) {
        return null;
      }

    return (
        <>
            {coffeeDetails}
        </>
    )
}

export default CoffeeDetails
