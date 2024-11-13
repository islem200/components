import React from 'react'

const Post = ({postName = 'no title', postBody = 'no body'}) => {
  return (
    <div style={{padding: "10px", border: "solid teal 5px",  margin:"30px"}}>
      <h2>{postName}</h2>
      <hr/>
      <p>{postBody}</p>
    </div>
  )
}

export default Post
