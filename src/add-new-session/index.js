import { useState } from "react";
import data from '../activities.json';

const AddNewSession = ({setNewSession}) => {
const [newActivitySession, setNewActivitySession] = useState({
        name :"",
        duration : "",
        time : "" 
})

const onChange = (e) => {
  setNewActivitySession({ ...newActivitySession, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(newActivitySession);
    data.push(newActivitySession);
    setNewSession(false);
    console.log(data);
    
  };
    return (
        <>
        <form className="mt-2">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          id="name"
          value={newActivitySession.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Duration</label>
        <input
          type="text"
          id="duration"
          className="form-control"
          placeholder="Duration"
          value={newActivitySession.duration}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="remarks">Time</label>
        <input
          type="text"
          id="time"
          className="form-control"
          placeholder="Time"
          value={newActivitySession.time}
          onChange={onChange}
        />
      </div>
      <button
        className="btn btn-primary mt-2"
        disabled={!newActivitySession.name || !newActivitySession.duration || !newActivitySession.time}
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
        
        </>
      );
}
 
export default AddNewSession;