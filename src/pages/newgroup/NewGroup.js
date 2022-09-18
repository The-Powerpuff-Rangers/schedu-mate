import React, { useState } from "react";
import "./newgroup.scss";
import NavBar from "../../components/navbar/navbar";

export default function NewGroup() {
  const [groupname, setGroupName] = useState();
  const [groupdesc, setGroupDesc] = useState();
  const [grouppurpose, setGroupPurpose] = useState();

  const createGroup = async () => {
    //some code to create a user
  };
  return (
    <div className="background">
      <NavBar></NavBar>
      <header className="heading2">Create your Group</header>
      <div className="form mt-[-5em] overflow-hidden">
        <div className="form-card">
          <form onSubmit={createGroup} className="add-class">
            <div className="single-form">
              {/* Course Name */}
              <div className="field">
                <label className="label">Group Title</label>

                <input
                  className="w-full min-h-[5vh] border-2 border-black"
                  onChange={(e) => setGroupName(e.target.value)}
                  type="text"
                  name="groupname"
                  id="groupname"
                  required
                  autoComplete="off"
                  placeholder="Course Name"
                  value={groupname}
                ></input>
              </div>
              {/* Course Code */}
              <div className="field">
                <label className="label">Group Purpose</label>
                <input
                  className="w-full min-h-[5vh] border-2 border-black"
                  onChange={(e) => setGroupPurpose(e.target.value)}
                  type="number"
                  name="grouppurpose"
                  id="grouppurpose"
                  required
                  autoComplete="off"
                  placeholder="Course Code"
                  value={grouppurpose}
                ></input>
              </div>
              {/* Day */}
              <div className="field">
                <label className="label">Group Description</label>
                <textarea
                  onChange={(e) => setGroupDesc(e.target.value)}
                  name="groupdesc"
                  id="groupdesc"
                  required
                  placeholder="Enter the description of your group"
                  value={groupdesc}
                  className="w-full min-h-[15vh] border-2 border-black"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="py-2 px-6 m-4 bg-transparent text-black text-bold text-2xl border-2 border-black hover:bg-[#1A3152] hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
