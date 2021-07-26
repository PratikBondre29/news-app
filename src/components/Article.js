import React from "react";
import img from "./myimg.jpg";
import LazyLoad from "react-lazyload";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
const Article = ({ article, toggle }) => {
  return (
    <LazyLoad height={200}>
      <div className={`card ${toggle && "card-toggle"}`}>
        <img
          className="card-img-top"
          src={article.urlToImage ? article.urlToImage : img}
          alt="NewsImage"
        />

        <div className="card-block p-2">
          <h6 className="card-title">
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </h6>
          <p className="card-text">{truncate(article.description, 150)}</p>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Article;
