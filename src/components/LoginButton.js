import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";
import videoSource from "./heroVideo.mp4";

const LoginButton = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const correctUsername = "user123"; //THE CORRECT USERNAME
    const correctPassword = "pass456"; //THE CORRECT PASSWORD

    function whenButtonPressed() {
        if (username === correctUsername && password === correctPassword) {
            // Redirect to the home page after successful login
            navigate("/home");
        } else {
            // Redirect to the login page if login fails
            navigate("/"); 
        }
    }
    

    return (
        <div className="container">
            <video autoPlay loop muted className="video-background">
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className="login-box">
                <h2>Login</h2>
                {/* Your login form inputs and button */}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={whenButtonPressed}>Login</button>
            </div>
        </div>
    );
};

export default LoginButton;
