import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            navigate("/dashboard");
        } else {
            window.alert("You are not admin!!")
            // navigate("/signIn");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card w-50 m-auto p-3 mt-3">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input
                            type="text"
                            class="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            placeholder="Enter username..."
                        />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <button className="btn btn-outline-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
