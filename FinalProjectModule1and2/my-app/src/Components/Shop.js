import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoffeeDetails from "./CoffeeDetails";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      categoryEspresso: "espresso",
      categoryFilter: "filter",
      all: 1,
      isToggleOn: false,
    };
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onCoffee = this.onCoffee.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onAll = this.onAll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onLoadMore() {
    this.setState((prevState) => ({
      limit: this.state.limit + 5,
    }));
  }

  onCoffee() {
    this.setState({
      final: this.state.categoryEspresso,
      all: 0,
      limit: (this.setState.limit = 5),
    });
  }

  onFilter() {
    this.setState({
      final: this.state.categoryFilter,
      all: 0,
      limit: (this.setState.limit = 5),
    });
  }

  onAll() {
    this.setState({
      all: 1,
      limit: (this.setState.limit = 5),
    });
  }

  handleClick(key) {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
      key: key,
    }));
  }

  render() {
    let initial = this.props.product;
    let length = this.props.product.length;
    let filterLength = this.props.product.filter(
      (key) => key.category === this.state.final
    ).length;
    const filter = this.props.product.filter(
      (key) => key.category === this.state.final
    );

    if (this.state.isToggleOn) {
      return (
        <div>
          <button className="rounded-circle float-right" onClick={this.handleClick}>X</button>
          <CoffeeDetails
            warn={this.state.isToggleOn && this.state.key}
            product={this.props.product}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Row>
            <Col>
              <h1 className="text-uppercase">
                Best Coffees from around the world
              </h1>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <button
                className="btn btn-dark btn btn-outline-warning m-5"
                onClick={this.onAll}
              >
                All
              </button>
            </Col>
            <Col lg={4}>
              <button
                className="btn btn-dark btn btn-outline-warning m-5"
                onClick={this.onCoffee}
              >
                Espresso
              </button>
            </Col>
            <Col lg={4}>
              <button
                className="btn btn-dark btn btn-outline-warning m-5"
                onClick={this.onFilter}
              >
                Filter Roast
              </button>
            </Col>
          </Row>
          <Row>
            {this.state.all === 1
              ? initial.slice(0, this.state.limit).map((key) => (
                  <div className="col-lg-4" key={key.id}>
                    <Card>
                      <Card.Img
                        src={key.img}
                        variant="top"
                        alt={key.img}
                        onClick={() => this.handleClick(key.id)}
                        key={key.id}
                      ></Card.Img>
                      <Card.Body>
                        <Card.Title className="text-uppercase">
                          {key.title}
                        </Card.Title>
                        <Card.Text>{key.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        {key.quantity === 0 ? (
                          <small className="text-danger">Out of Stock</small>
                        ) : (
                          <small className="text-muted">{key.price}</small>
                        )}
                      </Card.Footer>
                    </Card>
                  </div>
                ))
              : filter.slice(0, this.state.limit).map((filtered) => (
                  <div className="col-lg-4" key={filtered.id}>
                    <Card>
                      <Card.Img
                        src={filtered.img}
                        variant="top"
                        alt={filtered.img}
                        onClick={() => this.handleClick(filtered.id)}
                        key={filtered.id}
                      ></Card.Img>
                      <Card.Body>
                        <Card.Title className="text-uppercase">
                          {filtered.title}
                        </Card.Title>
                        <Card.Text>{filtered.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        {filtered.quantity === 0 ? (
                          <small className="text-danger">Out of Stock</small>
                        ) : (
                          <small className="text-muted">{filtered.price}</small>
                        )}
                      </Card.Footer>
                    </Card>
                  </div>
                ))}
          </Row>
          {this.state.all === 1 ? (
            this.state.limit >= length ? null : (
              <div className="m-5">
                <button
                  className="btn btn-light btn btn-outline-dark"
                  onClick={this.onLoadMore}
                >
                  Load More
                </button>
              </div>
            )
          ) : this.state.limit >= filterLength ? null : (
            <div className="m-5">
              <button
                className="btn btn-light btn btn-outline-dark"
                onClick={this.onLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      );
    }
  }
}

export default Shop;
