import React from "react";
import { Link } from "react-router-dom";
import './blog.css'

const BlogItemSidebar = ({
  id,
  index,
  blogType,
  firstPost,
  image,
  title,
  published,
  excerpt,
}) => {

  const blogURL = `/blog/${title
    .replace(/\//g, "-")
    .replace(/\s/g, "-")
    .toLocaleLowerCase()}?id=${id}`;

  return (
    <div
      className={
        "post " +
        ((blogType && index === firstPost) ||
        (blogType && index === firstPost + 1)
          ? ""
          : (index === firstPost)
          ? ""
          : "mt-50")
      }
    >
      <div className="post-img">
        <img
          className="img-fluid"
          src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1644869301/mentoring_ynusan.jpg"
          alt=""
        />
      </div>
      <div className="post-info">
        <h3>
          <Link to={`${process.env.PUBLIC_URL + blogURL}`}>{title}</Link>
        </h3>
        <h6>{published}</h6>
        <p>{excerpt}</p>
        <Link
          className="readmore dark-color"
          to={`${process.env.PUBLIC_URL + blogURL}`}
        >
          <span>Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogItemSidebar;
