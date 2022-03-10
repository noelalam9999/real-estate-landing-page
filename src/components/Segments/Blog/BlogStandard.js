import React from "react";
import dataBlog from "./blog-data.json";
import dataSocial from "./social-data.json";

import HeaderOne from "../../../components/Common/Header6";
import PageTitleBlog from "./PageTitleBlog";
import SidebarForBlog from "./SidebarForBlog";
import Icofont from "react-icofont";
import './blog.css'

const BlogStandard = ({ sidebar }) => {
  const postId = new URLSearchParams(window.location.search).get("id");
  const post = dataBlog.find((post) => post.id === parseInt(postId));
  const featuredPost = dataBlog.find((post) => post.id === 1);

  return (
<>
      <HeaderOne />
      <PageTitleBlog title={post.title} tagline={post.published} />
      <section style={{paddingTop:"150px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="post">
                <div className="post-img">
                  <img
                    className="img-fluid"
                    src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1644869301/mentoring_ynusan.jpg"
                    alt=""
                  />
                </div>
                <div className="post-info">
                  <h3>
                    <a href={process.env.PUBLIC_URL}>{featuredPost.title}</a>
                  </h3>
                  <h6>{featuredPost.published}</h6>
                  <p>{featuredPost.excerpt}</p>
                  <a className="readmore white-color" href="!#">
                    <span>Read More</span>
                    <i className="icofont icofont-simple-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog-standard">
                <p>{post.text}</p>
                <blockquote>
                  <p>{post.block}</p>
                </blockquote>
              </div>
              <div className="post-tags">
                {post.tags.map((tag, i) => (
                  <a key={i} href="!#">
                    {tag}
                  </a>
                ))}
              </div>
              <div className="post-controls">
                <div className="post-share">
                  <ul>
                    <li> Share: </li>
                    {dataSocial.map((social, i) => (
                      <li key={i}>
                        <a href={social.link}>
                          <Icofont icon={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="comments-info">
                  <a href="!#">
                    <i className="icofont icofont-comment"></i> 0
                  </a>
                </div>
              </div>
  
            </div>
            <div className="col-md-3 offset-md-1 right-col-rv">
              <SidebarForBlog />
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default BlogStandard;
