import React, {useState} from "react";
import './profile.scss';
import button from './Subtract.svg';
import addedButton from './add.svg';

const Profile = ({ name, school, email, year, program, add }) => {
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        console.log(added);
        setAdded(!added)

    };
    
        
    return (
        <div className='profile'>
            {add && <button onClick={handleClick} className="_button">
            {added ? <img className='_button' src={addedButton} alt="add"></img> : 
                        <img className='_button' src={button} alt="add"></img>
            }

               </button> }
            <div className='__name'>{name}</div>
            <div className='__text'>{school}</div>
            <div className='__text'>{email}</div>
            <div className='__text'>{year} Year {program}</div>

        </div>
    );
};

export default Profile;
