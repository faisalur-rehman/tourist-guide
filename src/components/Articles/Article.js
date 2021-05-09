import React from "react";
import ArticleCard from "../Card/Card";
import "./Article.css";
// import image1 from "../../assets/images/article1.jpg";
// import image2 from "../../assets/images/article2.jpg";
// import image3 from "../../assets/images/article3.jpg";

const Article = () => {
  let text =
    "impressive paella is a perfect party dish and a fun meal to cootogether with your guests. Add 1 cup of frozen peas along with themussels, if you like.";
  return (
    <div className="articles">
      <h2>Latest Articles</h2>
      <div className="article">
        <ArticleCard
          className="card"
          text={text}
          src="../../assets/images/article1.jpg"
        />
        <ArticleCard
          className="card"
          src="../../assets/images/article2.jpg"
          text={text}
        />
        <ArticleCard
          className="card"
          src="../../assets/images/article3.jpg"
          text={text}
        />
      </div>
    </div>
  );
};

export default Article;
