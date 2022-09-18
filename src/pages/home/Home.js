import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import NavBar from '../../components/navbar/navbar';
import './Home.scss'

const Home = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logout();
            console.log(user);
            navigate('/');
            console.log('you are logged out');
        } catch (e) {
            console.log(e.message);
        }
    }
        
    return (
        <div>
            <NavBar ></NavBar>
            <h1 className="heading2">Home</h1>
            <div className="landing-flex-home">
            <div className='left-home'>left</div>
            <div className='right-home'>right</div>
            </div>
            {/* <p>
                User Email: {user && user.email} 
                User Id: {user.uid}
            </p> */}
            
        </div>
    )
}

export default Home