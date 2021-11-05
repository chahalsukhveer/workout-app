
const Activity = (props) => {
    return (
        <>
        <tr>
            <td>
            {props.name}
            </td>
            <td>
            {props.duration}
            </td>
            <td>
            {props.time}
            </td>
        </tr>
            
          
        </>

    );
}
export default Activity;