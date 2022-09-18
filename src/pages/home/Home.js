import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import NavBar from "../../components/navbar/navbar";
import "./Home.scss";

const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      console.log(user);
      navigate("/");
      console.log("you are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleNewGroup = () => {
    navigate("/home/newgroup");
  };

  return (
    <div className="home-main">
      <NavBar></NavBar>
      <h1 className="heading2">Home</h1>
      <div className="landing-flex-home">
        <div className="left-home">
          <div className='home-heading'>
            Latest News
          </div>
          <div className='home-element'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.msit.in/media/news/result-of-upgradation-2022-23_OEz7enX.pdf'>Result of Upgradation 2022-23</a>
          </div>
          <div className='home-element'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.msit.in/media/news/nsp-portal-under-three-central-sector-scholarship-schemes-for-minority-community-st_VNtMBc9.pdf'>NSP portal under three Central Sector Scholarship Schemes for Minority Community Students for Academic Year 2022-23</a>
          </div>
          <div className='home-element'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.msit.in/media/news/nsp-portal-under-three-central-sector-scholarship-schemes-for-minority-community-st_u1VbVfT.pdf'> NSP portal under three Central Sector Scholarship Schemes for Minority Community Students for Academic Year 2022-23</a>
          </div>
          <div className='home-element'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.msit.in/media/news/registration-form-of-hostel-for-1st-year-students.pdf'>Registration form of hostel for 1st year students</a>
          </div>
          </div>
        <div className="right-home">
          <div className='home-heading'>
            Notices
            </div>
            <div className='home-element'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.msit.in/media/news/admission-notice-academic-session-2022-23_C9GHkDO.pdf'>Admission Notice Academic Session 2022-23</a>
          </div>
          <div className='home-element'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.msit.in/media/notices/time-table-_sep-dec_2022.pdf'>Time Table Sep-Dec 2022</a>
          </div>
          <div className='home-element'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.msit.in/media/notices/participation-in-national-research-paper-writing-competition-under-the-theme-sub_uXRz2B3.pdf'>Participation in National Research Paper Writing Competition under the theme "Subhash-Swaraj-Sarkar"</a>
          </div>
          <div className='home-element'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.msit.in/media/notices/pragati-and-saksham-scholarship-scheme.pdf'>Pragati and Saksham scholarship scheme</a>
          </div>
            </div>
        
      </div>
      <button onClick={handleNewGroup} className="landing-button margin">
        Add Group
      </button>
      {/* <p>
                User Email: {user && user.email} 
                User Id: {user.uid}
            </p> */}
    </div>
  );
};

export default Home;
