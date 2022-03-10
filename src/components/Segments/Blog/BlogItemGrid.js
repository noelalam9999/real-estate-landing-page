import React from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";

import './blog.css'
const BlogItemGrid = ({
  id,
  firstPost,
  index,
  image,
  title,
  link,
  slides,
  published,
  excerpt,
  type,
}) => {
  const blogURL = `/blog/${title
    .replace(/\//g, "-")
    .replace(/\s/g, "-")
    .toLocaleLowerCase()}?id=${id}`;

  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".blog-slider-next",
      prevEl: ".blog-slider-prev",
    },
  };

  return (
    <div
      className={
        "col-md-4 mt-50 " + (type === "video" ? "blog-grid-video" : "")
      }
    >
      <div className={"post " + (type === "video" ? "video-alpha" : "")}>
        {type === "slider" ? (
          <div className="blog-grid-slider">
           
                
                <img
            
                  className="img-fluid"
                  src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1644869301/mentoring_ynusan.jpg"
                  alt=""
                />
          
          </div>
        ) : (
          <div className="post-img">
            <img
              className="img-fluid"
              src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1644869301/mentoring_ynusan.jpg"
              alt=""
            />
            {type === "video" ? (
              <a className="video-play popup-youtube" href={process.env.PUBLIC_URL + blogURL}>
                <Icofont icon="ui-play" />
              </a>
            ) : null}
          </div>
        )}

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
    </div>
  );
};

export default BlogItemGrid;
