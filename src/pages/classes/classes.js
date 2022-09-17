import React, {useState} from 'react'
import NavBar from '../../components/navbar/navbar'
import Class from '../../components/class/class'
import Name from '../../components/name/name'

import './classes.scss'
const Classes = () => {


  const [filteredResults, setFilteredResults] = useState([]);
  const [counter, setCounter] = useState(0);

  const friends = []; // add list of all friends and their courses
  const myclassesID = [1, 2, 4]; // get data of all my classes id -> name, class numbers, day of the week, start time, end time

  // pass in course ids
  const searchItems = (friend) => {
    myclassesID.map((courseId) => {
        const filteredData = friend.filter((item) => {
            return Object.values(item.number).join('').toLowerCase().includes(courseId.toLowerCase())
        })
        setFilteredResults[counter](filteredData)
        setCounter(counter + 1);

    }
    )
};

  const allFilters = () => {
    friends.map((friend) => {
      searchItems(friend);
    })
  }




  return (
    <div>
      <NavBar active='same'></NavBar>
      <h1>Same Classes</h1>
      {friends.length > 1 ? 

      (
        filteredResults.map((data) => {
          <div>
              <Name name ={data.name}></Name>
                <Class
                name={data.name}
                number={data.number}
                time={data.time}>
                </Class>
                </div>
        })
    )
   
      :
      <>
      <Name name = "Jess"></Name>
      <div className = "friend">
        <Class
          name={'MATH135'}
          number={'817347'}
          time={'9:30-10:50 AM'}
          ></Class>
          <Class
          name={'ECON101'}
          number={'38492'}
          time={'11:30-12:50 PM'}
          ></Class>
      </div>
      <Name name = "Rob"></Name>
      <div className = "friend"> 
      <Class
          name={'MATH135'}
          number={'817347'}
          time={'9:30-10:50 AM'}
          ></Class>
          <Class
          name={'CS135'}
          number={'38293'}
          time={'1:30-2:50 PM'}
          ></Class>
                    <Class
          name={'MATH138'}
          number={'64283'}
          time={'3:30-4:20 PM'}
          ></Class>
      </div>
      <Name name = "Sam"></Name>
      <div className = "friend">
      <Class
          name={'ECON101'}
          number={'38492'}
          time={'11:30-12:50 PM'}
          ></Class>
      </div>
      </>
    }
    
    </div>
  );
};

export default Classes;