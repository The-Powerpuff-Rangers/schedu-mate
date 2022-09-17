import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import NavBar from '../../components/navbar/navbar';

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
            <h1>Home</h1>
            <p>
                User Email: {user && user.email} 
                User Id: {user.uid}
            </p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home