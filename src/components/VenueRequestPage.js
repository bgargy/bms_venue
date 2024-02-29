import React, { useState } from "react";
import "./VenueRequestPage.css"; // Ensure you create and import the corresponding CSS file

function VenueRequestPage() {
    // Simulating initial requests data
    const [requests, setRequests] = useState([
        { id: 1, title: "Event 1", clubName: "Club A", status: "pending", rejectionReason: "" },
        { id: 2, title: "Event 2", clubName: "Club B", status: "pending", rejectionReason: "" },
        // Add more requests as needed
    ]);

    const approveRequest = (id) => {
        setRequests(requests.map(request => request.id === id ? { ...request, status: "approved" } : request));
    };

    const rejectRequest = (id, reason) => {
        setRequests(requests.map(request => request.id === id ? { ...request, status: "rejected", rejectionReason: reason } : request));
    };

    return (
        <div className="venue-requests-container">
            <h2>Venue Requests</h2>
            {requests.map(request => (
                <div key={request.id} className="request-box">
                    <h3>{request.title}</h3>
                    <p>Club Name: {request.clubName}</p>
                    <p>Status: {request.status}</p>
                    {request.status === "pending" && (
                        <>
                            <button onClick={() => approveRequest(request.id)}>Approve</button>
                            <button onClick={() => {
                                const reason = prompt("Enter rejection reason:");
                                rejectRequest(request.id, reason);
                            }}>Reject</button>
                        </>
                    )}
                    {request.status === "rejected" && (
                        <p>Rejection Reason: {request.rejectionReason}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default VenueRequestPage;