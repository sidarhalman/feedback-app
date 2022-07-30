import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";

function App() {
    const[feedbacks, setFeedbacks] = useState(FeedbackData);
    return (
        <>
            <Header />
            <FeedbackItem />
            
        </>
    );
}

export default App;