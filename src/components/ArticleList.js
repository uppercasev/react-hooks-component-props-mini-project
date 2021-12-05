import React from "react";
import Article from "./Article";

function ArticleList({ posts = [] }) {
    return (
    <div id="article_list">
      <main>
        {posts.map(function({ id, title, preview, date }) {
            return <Article key={id} title={title} preview={preview} date={date} />;
        })}
      </main>
    </div>
  );
}

export default ArticleList;