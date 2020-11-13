import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Locate extends Component {
    render() {
        return (
            <div>
               <section><h1>Where are We?</h1></section>
               <section className="w-100 mx-auto">
                   <h4 className="text-muted locateS text-center">We are located at Orchard,Jewel and Jurong East. With 3 branches opened, you can indulged yourself with a cup of delicious coffee.
                   </h4>
               </section>
               <Row className="m-5">
                <Col lg={true}><div className="leftToRight"><img className="none" src="About/picture4.png" alt="J's Orchard Bar"/>
                <div className="m-3"><h4 className="text-uppercase">J's Orchard Bar</h4></div></div>
                <div className="m-3"><p className="small text-left">Have a sip of your favourite coffee and relax with the wonderful sights</p></div>
                </Col>
                <Col lg={true}><div className="leftToRight"><img className="none" src="About/picture5.png" alt="J's Jewel Bar"/>
                <div className="m-3"><h4 className="text-uppercase">J's Jewel Bar</h4></div></div>
                <div className="m-3"><p className="small text-left">Take a break while having a sip of Coffee and soak in the atmosphere of this amazing bar</p></div>
                </Col>
                <Col lg={true}><div className="leftToRight"><img className="none" src="About/picture6.png" alt="J's Jurong Bar"/>
                <div className="m-3"><h4 className="text-uppercase">J's Jurong Bar</h4></div></div>
                <div className="m-3"><p className="small text-left">Journey to the West and immerse yourself into the Coffee Magic World</p></div>
                </Col>
               </Row>
               
               
            </div>
        )
    }
}

export default Locate
