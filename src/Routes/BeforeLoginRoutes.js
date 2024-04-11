import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/BeforeLoginPages/HomePage/HomePage";
import SignUp from "../pages/BeforeLoginPages/SignUp/SignUp";
import Login from "./../pages/BeforeLoginPages/Login/Login";
import FindFreelancingJob from "../pages/BeforeLoginPages/FindFreelancingJob/FindFreelancingJob";
import DevelopmentItTalent from "../pages/BeforeLoginPages/FindTalent_Development_It_Talent/DevelopmentItTalent";
import PageNotFoundBeforeLogin from "./../pages/PageNotFound/PageNotFoundBeforeLogin";
import SignupDetails from "../pages/BeforeLoginPages/SignUp Details/SignupDetails";

export default function BeforeLoginRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/upwork-clone" exact element={<HomePage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/sign-up/details" exact element={<SignupDetails />} />
        <Route path="/freelance-jobs" exact element={<FindFreelancingJob />} />
        <Route path="/dev-it" exact element={<DevelopmentItTalent />} />
        <Route path="*/*" element={<PageNotFoundBeforeLogin />} />
      </Routes>
    </>
  );
}
