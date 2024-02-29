import React, { useState, useEffect } from "react";import "./Request.css";
const ConfirmLetterPage = () => {
  const [requests, setRequests] = useState([
    { id: 1, title: "Event 1", clubName: "Club A", isApproved: true },
    { id: 2, title: "Event 2", clubName: "Club B", isApproved: false },
    { id: 3, title: "Event 3", clubName: "Club C", isApproved: true },
]);

useEffect(() => {
    // Placeholder for fetching data logic
}, []);

return (
    <div className="requests-container">
        <h2>My Requests</h2>
        <div className="requests-list">
            {requests.map((request) => (
                <div key={request.id} className="request-box">
                    <h3>{request.title}</h3>
                    <p>Club Name: {request.clubName}</p>
                    <p className={`status ${request.isApproved ? "approved" : "pending"}`}>
                        {request.isApproved ? "Approved" : "Pending"}
                    </p>
                </div>
            ))}
        </div>
    </div>
);
}
export default ConfirmLetterPage;
