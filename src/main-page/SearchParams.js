import { useState } from "react";
import ActivityResult from "../search-result";

const SearchParams = ({activities}) =>{
    const [name, setName] = useState("");
    const ACTIVITIES = ['Running', 'Cycling', 'Yoga', 'Meditation']
return (
<>
    <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
        <form>
            {/* <label htmlFor="name">
                Search activity: 
                <input id="name" onChange={(e) => setName(e.target.value)} value={name}></input>
            </label> */}
            <label htmlFor="name">
                Search activity: 
                <select id="name" onChange={(e) => setName(e.target.value)} value={name}>
                    <option />
                    {ACTIVITIES.map(activity => (
                        <option key={activity} value={activity}>{activity} </option>
                    ))}
                </select>
            </label>
        </form>
        </div>

    </div>
            <ActivityResult allActivities={activities} name ={name}></ActivityResult>
</>
);
};




export default SearchParams;