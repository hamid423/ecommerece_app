import React from 'react'
import { AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Review = ({ note, reviews }) => {
    let fillStars = []
    let outlineStars = []
    for (let i = 0; i < note; i++)
    {
        fillStars.push(<AiFillStar/>)
    }

    for (let i = 0; i < 5 - note; i++){
        outlineStars.push(<AiOutlineStar/>)

    }
  return (
    <div className="reviews">
        <div>
        {fillStars?.map((star) => star)}
        {outlineStars?.map((star) => star)}
        </div>
        <p>
            ({reviews})
        </p>
       
    </div>
  )
}

export default Review