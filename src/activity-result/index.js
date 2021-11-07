import Activity from "../activity-page";

const ActivityResult = ({allActivities,name}) => {

 const selectedActivity = name ? allActivities.filter(activity => activity.name === name) : allActivities;

    return ( 
      <>
      <div className="col-8">
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Activity</th>
      <th scope="col">Duration</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
          {selectedActivity.map(activity => (
            <Activity name={activity.name} duration={activity.duration} time={activity.time}></Activity>
          ))}
          </tbody>
  </table>
      </div>
</>
     
      );
}
 
export default ActivityResult;