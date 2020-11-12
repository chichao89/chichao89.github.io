import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function Home(props) {
  
  const shuffleArray = () =>{
    let length  = props.product.length - 1;
    for(; length > 0; length--){
      const finalArray = Math.floor(Math.random()*(length+1));
      const temp = props.product[length];
      props.product[length] = props.product[finalArray];
      props.product[finalArray] = temp;
    }
    return props.product;
  }
  
  return (
    <div>
    <h2 className="h2text">Hot Products</h2>
    <button className="btn btn-dark btn btn-outline-light">Shop All Products</button>
    <CardDeck>
      {shuffleArray(props.product).slice(0,3).map((key) => (
          <Card className="col-lg-4" key={key.id}>
            <Card.Img  variant="top" src={key.img} />
            <Card.Body>
              <Card.Title className="text-uppercase">{key.title}</Card.Title>
              <Card.Text>{key.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{key.price}</small>
            </Card.Footer>
          </Card>
      ))}
    </CardDeck>
    </div>
  );
}

export default Home;
