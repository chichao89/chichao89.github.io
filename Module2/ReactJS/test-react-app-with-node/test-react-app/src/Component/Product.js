import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
             Product :[ {
                 id : 1,
                 name : "Hello Kitty",
                 price : 10.99,
                 quantity : 0 ,
             },{
                 id : 2,
                 name : "Doraemon",
                 price : 50,
                 quantity : 0
             }]
        }


    }
    

    render() {
        return (
            <div>
                <div className="row">
                    {this.state.Product.map(key => (
                        <div key={key.id}>
                            <div className="col">
                                <p>{key.name}</p>
                                <p>{key.price}</p>
                                <p></p>
                                <button>Add to Cart</button>                           
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
     
        )
    }
}

export default Product
