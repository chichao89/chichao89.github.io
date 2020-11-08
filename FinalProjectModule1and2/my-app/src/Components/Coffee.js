import React, { Component } from 'react'
import Product from '../Data/Product.json'
import Home from './Home'


class Coffee extends Component {
    constructor(props) {
        super(props)
        this.state = {
             coffeeProduct: Product
        }
    }

    render() {
        return (
            <>
                <Home product= {this.state.coffeeProduct}/>
            </>
        )
    }
}

export default Coffee
