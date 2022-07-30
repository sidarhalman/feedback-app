import { useState } from "react";

import "../styles/FeedbackItem.css";

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">Lorem ipsum dolor sit amet.</div>
    </div>
  );
}

export default FeedbackItem;
