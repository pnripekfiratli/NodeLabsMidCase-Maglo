import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "../modules/sign/signIn";
import SignUp from "../modules/sign/signUp";
import Dashboard from "../modules/dashboard/dashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="*"
          element={<ProtectedRoute children={<Dashboard />}></ProtectedRoute>}
        />
        <Route
          path="dashboard"
          element={<ProtectedRoute children={<Dashboard />}></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}
