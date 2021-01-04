import React from 'react'
import FontAwesome from 'react-fontawesome'

import '../css/Stars.css'

const Stars = (props) => {
    const rendersStars1 = () => {
        return props.fakeArray1.map((element,i) => {
            return (
                <FontAwesome
                    key={i}
                    className="stars"
                    name="star"
                    size="3x"
                />
            )
        })
    }
    const rendersStars2 = () => {
        return props.fakeArray1.map((element,i) => {
            return (
                <FontAwesome
                    key={i}
                    className="stars"
                    name="star-o"
                    size="3x"
                />
            )
        })
    }
    return (
        <div className="stars">
            {rendersStars1()}
            {rendersStars2()}
        </div>
    )
}

export default Stars
