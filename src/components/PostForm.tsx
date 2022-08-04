import React, { useState } from "react";
import { Post } from "./SocialPosts";
import "./PostForm.css";

interface Props {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

export default function PostForm({ onSubmit, onClose }: Props) {
  const [post, setPost] = useState<Post>({ title: "", thought: "" });

  function handlePost(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost({
      ...post,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(post);
    clearFormValues();
  }

  function clearFormValues() {
    setPost({ title: "", thought: "" });
  }

  function closeForm() {
    onClose();
  }

  return (
    <div>
      <div className="exit-container">
        <button className="exit-btn" onClick={closeForm}>
          X
        </button>
      </div>

      <form
        onSubmit={(e) => {
          handleSubmitForm(e);
        }}
      >
        <input
          className="title-input"
          type="text"
          name="title"
          placeholder="Title"
          value={post.title}
          onChange={handlePost}
        />
        <input
          className="thought-input"
          type="text"
          name="thought"
          placeholder="Your thought"
          value={post.thought}
          onChange={handlePost}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
