import "./index.css";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Home from "./Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}
