import './main-page.css';
import Header from './header';
import { useEffect, useState } from 'react';
 import data from './activities.json';
import SearchParams from './SearchParams';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(()=> {
     setActivities(data);
  },[])
  return (
    <div className="container">
      <Header subtitle="Fitness for mind and body" />
      
      <div className="row">
      <SearchParams activities={activities} ></SearchParams>
      </div>
    </div>
  );
}

export default App;
