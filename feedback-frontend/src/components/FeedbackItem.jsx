import { useState } from "react";

import "../styles/FeedbackItem.css";

function FeedbackItem({key, feedback}) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("it is default text");

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackItem;
