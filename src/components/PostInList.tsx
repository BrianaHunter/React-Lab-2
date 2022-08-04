import React from "react";
import { Post } from "./SocialPosts";
import "./PostInList.css";

export interface PostListProps {
  postList: Post[];
  onDeletePost: (title: string) => void;
}

export default function PostInList({ postList, onDeletePost }: PostListProps) {
  return (
    <div>
      {postList.map((post) => (
        <div className="container">
          <div className="post-container">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-thought">{post.thought}</p>
            <button
              className="delete-btn"
              onClick={() => onDeletePost(post.title)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
