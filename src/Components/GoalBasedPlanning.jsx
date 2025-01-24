import React, { useEffect, useState } from 'react';
import './GoalBasedPlanning.css';
import { IoCarSportSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { GiBigDiamondRing } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";
import { FaUserGraduate, FaPlaneDeparture, FaUmbrellaBeach, FaBed, FaDollarSign,FaHandHoldingHeart } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdOutlineHealthAndSafety } from "react-icons/md";
// import Backend_Url from '../Config/Backend_Url';
// import token from '../Config/Token';
// import axios from "axios";


 const GoalBasedPlanning = () => {

//   const [gallery1, setGallery] = useState([]);
//   const [galleryfors, setGalleryfors] = useState([]);

//   const FetchGallery = async () => {
//     debugger
//     try {
//       const response = await axios.get(`${Backend_Url}/gallery/Images/all`, {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });
//       setGallery(response.data.groupedImages.ImagesForMiddleAge); // Handle cases where data might be undefined
//     } catch (error) {
//       console.error("Error fetching gallery data:", error);
//     }
//   };

//   useEffect(() => {
//     FetchGallery();
//   }, []);
//   useEffect(() => {
//     FetchGalleryfors();
//   }, []);

  // const FetchGalleryfors = async () => {
  //   debugger
  //   try {
  //     const responsefors = await axios.get(`${Backend_Url}/gallery/Images/all`, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     setGalleryfors(responsefors.data.groupedImages.GoalsofSeniorsImages); // Handle cases where data might be undefined
  //   } catch (error) {
  //     console.error("Error fetching gallery data:", error);
  //   }
  // };

  const ygoals = [
    { heading: "Own a Car ", title: "Achieve the Freedom of Driving Your Own Car", icon: <IoCarSportSharp /> },
    { heading: "Own a House ", title: "Build Your Dream Home", icon: <IoHomeOutline /> },
    { heading: "Grand Wedding", title: "Celebrate a Memorable Wedding Journey", icon: <GiBigDiamondRing /> },
    { heading: "Dream Vacation", title: "Experience Your Perfect Getaway", icon: <TbBeach /> },
  ];
  const mgoals = [
    { title: "Invest in Your Child’s Bright Future", icon:<FaUserGraduate/> , heading:"Bright Future Awaits!"},
    { title: "Build Your Forever Home", icon:<IoIosHome />, heading:"Dream Home!"},
    { title: "Experience a World-Class Journey", icon:<FaPlaneDeparture />, heading:"Superior Journey!" },
    { title: "Plan for a Stress-Free Retirement", icon:<FaUmbrellaBeach />, heading:"Secure Retirement!" },
  ];


  // const mtitle = [
  // "Invest in Your Child’s Bright Future", 
  // "Build Your Forever Home", 
  // "Plan for a Stress-Free Retirement", 
  // "Experience a World-Class Journey", 
 
  // ];

  const sgoals = [
    { title: "Secure a Comfortable Retirement", icon:<FaBed />, heading:"Carefree Retirement!"},
    { title: "Ensure Financial Stability for Life", icon:<FaDollarSign />, heading:"Secure Your Wealth!" },
    { title: "Build a Lasting Heritage for Loved Ones", icon:<FaHandHoldingHeart />, heading:"Create a Lasting Legacy!" },
    { title: "Prioritize Health and Wellness", icon:<MdOutlineHealthAndSafety />, heading:"Health and Wellness!" },
  ];
  // const sgoals = [
  //   "Secure a Comfortable Retirement", 
  //   "Prioritize Health and Wellness", 
  //   "Build a Lasting Heritage for Loved Ones", 
  //   "Ensure Financial Stability for Life", 
  //  ];

  return (
    <>
      <div className="GoalBasedPlanninBanner">
        <h1>Goal Based Planning</h1>
        <div className="goalcontainer">
          <div className="card youngster">
            <h2>Gen-Z</h2>
            {/* <p>Building dreams with smart financial decisions for a bright future.</p> */}
            <p> Don't Wait For The Perfect Moment</p>
            <p>The Best Time To Start Is Now</p>
          </div>
          <div className="card middle-aged">
            <h2>Middle-Aged</h2>
            <p>Securing your family's future with balanced investments.</p>
          </div>
          <div className="card senior">
            <h2>Seniors</h2>
            <p>Enjoying life’s rewards with safe and stable investments.</p>
          </div>
        </div>
      </div>
      {/* GoalBasedPlanninBanner end */}

      <div className="goals-container">
        <h2 className="goals-title">Goals of Gen-Z</h2>
        <div className="goals-grid">
          {ygoals.map((goal, index) => (
            <div key={index} className="goal-card">
              <div className="goal-icon">{goal.icon}</div>
              <h2 className='goal-heading'>{goal.heading}</h2>
              <h6 className="goal-title">{goal.title}</h6>
            </div>
          ))}
        </div>
      </div>
      {/* ygoals-container end */}

      <div className="middle-aged-goals-container">
        <h2 className="middle-aged-goals-title">Goals for the Middle-Aged</h2>
        <div className="middle-aged-goals-grid">
          {
            mgoals.map((goal, index)=>(
              <div key={index} className="goal-card">
              <div className="goal-icon">{goal.icon}</div>
           <h2 className='goal-heading'>{goal.heading}</h2> 
              <h6 className="goal-title">{goal.title}</h6>
            </div>
            ))
          }
        </div>
      </div>
      {/* mgoals-container end */}

      <div className="sgoals-container">
        <h2 className="sgoals-title">Goals of Seniors</h2>
        <div className="sgoals-grid">
          {
          // galleryfors.length > 0 ? (
          //   galleryfors.map((item, index) => (
          //     <div key={index} className="sgoal-card">
          //       <div className="sgoal-image">
          //         <img src={item.Imagepath} alt={item.Name} />
          //       </div>
          //       {/* <h3 className="sgoal-title">{item.Name}</h3> */}
          //       <h3 className="sgoal-title">{sgoals[index]}</h3>
          //     </div>
          //   ))
          // ) : (
          //   <p>No goals available.</p> // Display a message if gallery is empty
          // )
          sgoals.map((goal, index)=>(
            <div key={index} className="goal-card">
            <div className="goal-icon">{goal.icon}</div>
            <h2 className='goal-heading'>{goal.heading}</h2> 
            <h6 className="goal-title">{goal.title}</h6>
          </div>
          ))
          }
        </div>
      </div>
      {/* sgoals-container end */}
    </>
  )
}

export default GoalBasedPlanning
