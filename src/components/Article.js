import React from "react";

function Article({ title, preview, date = "January 1, 1970" }) {
  return (
    <div>
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    </div>
  );
}

export default Article;