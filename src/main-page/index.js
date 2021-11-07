import './main-page.css';
import Header from './header';
import { useEffect, useState } from 'react';
 import data from '../activities.json';
import WorkoutApp from './WorkoutApp';
import AddNewSession from '../add-new-session';

function App() {
  const [activities, setActivities] = useState([]);
  const [addNewSession, setNewSession] = useState(false);
  useEffect(()=> {
     setActivities(data);
  },[])

  const addNewSessionClick = () => {setNewSession(!addNewSession);}
  return (
    <div className="container">
      <Header subtitle="Fitness for mind and body" />
      
      <div className="row">
      <div className="col-8">
      <WorkoutApp activities={activities} ></WorkoutApp>
        </div>
        <div className="col-4">
           <button id="addNewSession" onClick={addNewSessionClick}>Add new activity</button>
           {addNewSession && <AddNewSession setNewSession={setNewSession}></AddNewSession>}
        </div> 
      </div>
    </div>
  );
}

export default App;
