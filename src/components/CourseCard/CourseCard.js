import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.scss'



// const CourseCard = () => {
//   return (
//     <div>

//     </div>
//   )
// }

function CourseCard (props) {
    return (
    <div className="card-container">
        <div className='course'>
            {/* Section 1 */}
            <div className='preview'>
                <h6>Course</h6>
                <h2>{props.name}</h2>
                <Link to='/home/my-schedule'>View in Schedule</Link>
            </div>
            {/* Section 2 */}
            <div className="info-card">
                    <div className="progress-wrapper">
      
            
                    </div>
                    <h6>Course {props.index}</h6>
                    <h2>{props.name} {' '} {props.code}</h2>
                    <p className='p-trunc'>
                        Day: {props.day}
                    </p>
                    <p className='p-trunc'>
                        Start time: {props.start}
                    </p>
                    <p className='p-trunc'>
                        End time: {props.end}
                    </p>
                    <button className="btn">Edit Course</button>

            </div>
        </div>
    </div>
    )
    
}
export default CourseCard