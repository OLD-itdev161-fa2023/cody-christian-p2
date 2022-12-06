import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./styles.css";

const EditPost = ({ token, post, onPostCreated }) => {
    let history = useHistory();
    const [postData, setPostData] = useState({
        model: post.model,
        brand: post.brand,
        finish: post.finish,
        notes: post.notes   
    });
    const { model, brand, finish, notes } = postData;

    const onChange = e => {
        const { name, value } = e.target;

        setPostData({
            ...postData,
            [name]: value
        });
    };

    const update = async () => {
      if (!model || !brand || !finish) {
        console.log("Model, Brand, and Finish are required");
      } else {
        const newPost = {
          model: model,
          brand: brand,
          finish: finish,
          notes: notes,
        };

        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
          };

          const body = JSON.stringify(newPost);
          const res = await axios.post(
            `http://localhost:5000/api/posts/${post._id}`,
            body,
            config
          );
          onPostCreated(res.data);
          history.push("/");
        } catch (error) {
          console.error(`Error creating post: ${error.response.data}`);
        }
      }
    };

    return (
      <div className="form-container">
        <h2>Edit Post</h2>
        <input
          name="model"
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => onChange(e)}
        />
        <input
          name="brand"
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => onChange(e)}
        />
        <input
          name="finish"
          type="text"
          placeholder="Finish"
          value={finish}
          onChange={(e) => onChange(e)}
        />
        <textarea
          name="notes"
          cols="30"
          rows="10"
          value={finish}
          onChange={(e) => onChange(e)}
        ></textarea>
        <button onClick={() => update()}>Submit</button>
      </div>
    );
};

export default EditPost;