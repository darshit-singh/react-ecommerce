import React from 'react'

const Rating = (props) => {
    let { value, text } = props
    return (
        <div className='my-3'>
            {value} from {text}
        </div>
    )
}

export default Rating
