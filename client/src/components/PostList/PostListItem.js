import React from "react";
import { useHistory } from "react-router-dom";
import slugify from "slugify";
import "./styles.css"

const PostListItem = props => {
    const { post, clickPost, deletePost, editPost } = props;
    const history = useHistory();

    const handleClickPost = post => {
        const slug = slugify(post.model, { lower: true });

        clickPost(post);
        history.push(`/posts/${slug}`);
    };

    const handleEditPost = post => {
        editPost(post);
        history.push(`/edit-post/${post._id}`);
    };

    return (
      <div>
        <div className="postListItem" onClick={() => handleClickPost(post)}>
          <h1>{post.model}</h1>
          <h2>{post.brand}</h2>
          <h2>{post.finish}</h2>
          <p>{post.notes}</p>
        </div>
        <div className="postControls">
          <button onClick={() => deletePost(post)}>Delete</button>
          <button onClick={() => handleEditPost(post)}>Edit</button>
        </div>
      </div>
    );
};

export default PostListItem;