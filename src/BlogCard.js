import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ param, cardImg, Title, body }) {
  return (
    <Link className="BlogLink boxwidth" to={`blog/${param}`}>
      <div className="BlogCard">
        <div className="cardImg">
          <img className="cardCover" src={cardImg} alt="" />
        </div>
        <div className="cardContent">
          <div className="cardheads">
            <h2>{Title}</h2>
            <p>{body.substr(0, 500)}...</p>
          </div>
          <a href="//">Visit Blog ➜</a>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
