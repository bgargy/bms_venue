import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css"; // Ensure this path is correct
import videoSource from "./heroVideo.mp4"; // Ensure this path is correct

const LoginButton = ({ onLogin }) => {
    const navigate = useNavigate();
    const [clubUsername, setClubUsername] = useState("");
    const [clubPassword, setClubPassword] = useState("");
    const [adminUsername, setAdminUsername] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [error, setError] = useState("");

    const loginRequest = async (userType, email, password) => {
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    userType
                }),
            });

            if (response.ok) {
                const userInfo = await response.json();
                onLogin(userInfo); // Handle successful login
                navigate(userInfo.userType === 'club' ? "/home" : "/admin"); // Redirect based on userType
            } else {
                setError("Invalid username or password");
            }
        } catch (error) {
            console.error("Login request failed", error);
            setError("Login request failed");
        }
    };

    const clubLogin = () => {
        loginRequest('club', clubUsername, clubPassword);
    };

    const adminLogin = () => {
        loginRequest('admin', adminUsername, adminPassword);
    };

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
