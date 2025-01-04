
'use client'

import React, { useState, useEffect } from "react";

export default function CommentSection() {
  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState("");

  // Retrieve the stored comment from localStorage when the component mounts
  useEffect(() => {
    const storedComment = localStorage.getItem("userComment");
    if (storedComment) {
      setSubmittedComment(storedComment); // Set the stored comment when the page loads
    }
  }, []);

  // Store the comment in localStorage whenever the user types it
  const handleCommentChange = (e) => {
    const newComment = e.target.value;
    setComment(newComment); // Update state
    localStorage.setItem("userComment", newComment); // Save to localStorage as user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the submitted comment to localStorage
    localStorage.setItem("userComment", comment);
    
    // Update the state to show the submitted comment
    setSubmittedComment(comment);

    // Clear the input field after submission
    setComment(""); // Clear the comment input field
  };

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 w-full md:w-1/2 rounded-lg shadow-lg">
      <h4 className="text-3xl font-extrabold text-center mb-4 text-black">Leave a Comment</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          rows={4}
          className="w-full p-4 text-dark bg-white border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
          placeholder="Write your comment here..."
        />
        <button
          type="submit"
          className="px-8 py-3 text-xl font-semibold border-2 border-dark text-light hover:text-dark uppercase transition-all duration-150 ease-linear bg-dark hover:bg-light rounded-lg block mx-auto"
        >
          Submit
        </button>
      </form>

      {/* Display submitted comment below */}
      {submittedComment && (
        <div className="mt-6 bg-gray-700 p-4 rounded-lg">
          <h5 className="text-lg font-bold text-white">Your Submitted Comment:</h5>
          <p>{submittedComment}</p>
        </div>
      )}
    </section>
  );
}
