import React from 'react'

const Contact = () => {
    return (
        <form className="form">
            <h1>My Contact List</h1>

            <label>Name:</label>
            <input type="text" placeholder="Name"/>

            <label>Gender:</label>
            <input type="radio" name="gender" value="male"/>Male
            <input type="radio" name="gender" value="female"/>Female

            <label>Phone:</label>
            <input placeholder="Phone"/>
        </form>
    )
}

export default Contact
