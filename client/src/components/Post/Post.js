import React from 'react';

const Post = props => {
    const { guitar } = props;

        return (
          <div>
            <h1>{guitar.model}</h1>
            <h2>{guitar.brand}</h2>
            <h2>{guitar.finish}</h2>
            <p>{guitar.notes}</p>
          </div>
    )
}

export default Post;