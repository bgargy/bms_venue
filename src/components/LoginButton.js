import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";
import videoSource from "./heroVideo.mp4";

const LoginButton = () => {
    const navigate = useNavigate();
    const [clubUsername, setClubUsername] = useState("");
    const [clubPassword, setClubPassword] = useState("");
    const [adminUsername, setAdminUsername] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [error, setError] = useState("");

    const correctClubUsername = "user123";
    const correctClubPassword = "pass456";
    const correctAdminUsername = "admin123";
    const correctAdminPassword = "pass789";

    function clubLogin() {
        if (clubUsername === correctClubUsername && clubPassword === correctClubPassword) {
            // Redirect to the home page for club users after successful login
            navigate("/home");
        } else {
            setError("Invalid club username or password");
        }
    }

    function adminLogin() {
        if (adminUsername === correctAdminUsername && adminPassword === correctAdminPassword) {
            // Redirect to the home page for admin users after successful login
            navigate("/home");
        } else {
            setError("Invalid admin username or password");
        }
    }

    return (
        <div className="container">
            <video autoPlay loop muted className="video-background">
                <source src={videoSource} type="video/mp4" />
            </video>
            <h1 className="title">CAMPUS SPACE</h1>
            <div className="login-box">
                <div className="login-section">
                    <h2>Club Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={clubUsername}
                        onChange={(e) => setClubUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={clubPassword}
                        onChange={(e) => setClubPassword(e.target.value)}
                    />
                    <button onClick={clubLogin}>Login</button>
                </div>
                <div className="login-section">
                    <h2>Admin Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={adminUsername}
                        onChange={(e) => setAdminUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                    />
                    <button onClick={adminLogin}>Login</button>
                </div>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default LoginButton;
