import React from 'react'


function Story() {
    return (
        <div>
           <picture>
            <source media="(min-width:650px)" srcset="About/picture1.heic"/>
            <img src="img_orange_flowers.jpg" alt="Flowers"/>
            </picture>
        </div>
    )
}

export default Story
