import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import GoalBasedPlanning from "./Components/GoalBasedPlanning.jsx";
import MutualFund from "./Components/MutualFund.jsx";
import InquiryForm from "./Components/InquiryForm.jsx";
import PMSPhilosophy from "./Components/PMSPhilosophy.jsx";
import Workshop from "./Components/Workshop.jsx";
import BlogPage from "./Components/BlogPage.jsx";
import GoalOrientedInvestments from "./Components/GoalOrientedInvestments.jsx";
import StrategicFinancialPlanning from "./Components/StrategicFinancialPlanning.jsx";
import ContactForm from "./Components/ContactForm.jsx";
import AboutPage from "./Components/Pages/aboutUs/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <Navbar />
        <AboutPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
  },

  {
    path: "/signup",
    element: (
      <>
        <Header />
        <Navbar />
        <Signup />
        <Footer />
      </>
    ),
  },
  {
    path: "/goal",
    element: (
      <>
        <Header />
        <Navbar />
        <GoalBasedPlanning />
        <Footer />
      </>
    ),
  },
  {
    path: "mutual-fund",
    element: (
      <>
        <Header />
        <Navbar />
        <MutualFund />
        <Footer />
      </>
    ),
  },
  {
    path: "inquiry",
    element: (
      <>
        <Header />
        <Navbar />
        <InquiryForm />
        <Footer />
      </>
    ),
  },
  {
    path: "pms",
    element: (
      <>
        <Header />
        <Navbar />
        <PMSPhilosophy />
        <Footer />
      </>
    ),
  },
  {
    path: "workshops",
    element: (
      <>
        <Header />
        <Navbar />
        <Workshop />
        <Footer />
      </>
    ),
  },
  {
    path: "blog",
    element: (
      <>
        <Header />
        <Navbar />
        <BlogPage />
        <Footer />
      </>
    ),
  },
  {
    path: "goaloi",
    element: (
      <>
        <Header />
        <Navbar />
        <GoalOrientedInvestments />
        <Footer />
      </>
    ),
  },
  {
    path: "strategicfinancialplanning",
    element: (
      <>
        <Header />
        <Navbar />
        <StrategicFinancialPlanning />
        <Footer />
      </>
    ),
  },
  {
    path: "email",
    element: (
      <>
        <Header />
        <Navbar />
        <ContactForm />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
