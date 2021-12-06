import React from "react";
import Article from "./Article";

function ArticleList({ posts = [] }) {
  return (
    <div id="article_list">
      <main>
        {posts.map(function ({ id, title, preview, date, minutes }) {
          return (
            <Article
              key={id}
              title={title}
              preview={preview}
              date={date}
              minutes={minutes}
            />
          );
        })}
      </main>
    </div>
  );
}

export default ArticleList;
