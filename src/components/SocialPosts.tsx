import React, { useState } from "react";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

export interface Post {
  title: string;
  thought: string;
}
export default function SocialPosts() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [openForm, setOpenForm] = useState(false);

  function handleSubmit(post: Post) {
    setPostList([post, ...postList]);
    console.log(post);
  }

  function handleDeletePost(title: string) {
    setPostList(postList.filter((post) => post.title !== title));
    console.log(title);
  }

  function showForm() {
    setOpenForm(true);
  }
  function exitForm() {
    setOpenForm(false);
  }

  return (
    <div>
      <div className="btn-container">
        <button className="new-thought-button" onClick={showForm}>
          New Thought
        </button>
      </div>

      {openForm === true && (
        <PostForm onSubmit={handleSubmit} onClose={exitForm} />
      )}

      <PostInList postList={postList} onDeletePost={handleDeletePost} />
    </div>
  );
}
