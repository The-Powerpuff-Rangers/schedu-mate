import {React,useState} from "react";
import NavBar from "../../components/navbar/navbar";
import "./notes.scss";

export default function Notes() {
  // const [newEvent, setNewEvent] = useState([]);
  const [name, setName] = useState([]);

  const uploadFile = (e) => {
    e.preventDefault();
    
    };
   

   const onUploadChange = (e) => {
    
    setName( Array.from(e.target.files));
   
      
  };
  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  // }
 var isAdmin=true;

  return (
  <div>  
  <NavBar></NavBar>
  
<h1 className="heading2">My Notes</h1>
<div className="notes-main">
<div className='display-area' >
 <ul> <center>{name.map((file) => (
          <li key={file.name}>
            {file.name}
            
          </li>))}
          </center>
          </ul>

</div>
<form  onSubmit={uploadFile}>
  <div className="btn-grp">
<div className="upload-field">
<div className="file has-name">
<label className="file-label">

<input
          type="file"
          name="file"
          className="file-input"
          id="file-upload"
          onChange = {onUploadChange}
          style={{ display: "none" }}
          multiple
        />

<span className="file-cta">
<span className="file-icon">
  <i className="fas fa-upload"></i>
</span>
<span className="file-label">
  Choose a file…
</span>

</span>


</label>
<button className="button is-primary margin" type="submit">Upload Files</button>
</div>



</div>
</div>
</form>

</div>
</div>
  );
}
