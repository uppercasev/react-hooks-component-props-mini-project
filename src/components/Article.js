import React from "react";

function Article({ title, preview, date = "January 1, 1970", minutes }) {
  const emojiCup = "☕️";
  const emojiBento = "🍱";
  const emojiCount = (minutes) => {
    if (minutes < 30) {
      return emojiCup.repeat(Math.ceil(minutes / 5));
    } else {
      return emojiBento.repeat(Math.ceil(minutes / 10));
    }
  };
  return (
    <div>
      <article>
        <h3>{title}</h3>
        <small>
          {date} - {emojiCount(minutes)} {minutes} min read
        </small>
        <p>{preview}</p>
      </article>
    </div>
  );
}

export default Article;
