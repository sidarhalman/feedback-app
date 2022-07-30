import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
    const[feedback, setFeedback] = useState(FeedbackData);
    console.log(feedback, "in app");
    return (
        <>
            <Header />
            <FeedbackList feedback={feedback} />
        </>
    );
}

export default App;