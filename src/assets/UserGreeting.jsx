import proptypes from 'prop-types';

function UserGreeting( props){
// if(props.isLoggedIn){
//     return <h2> Welcome {props.username}</h2>
// }else{
//     return <h2>Please check log in </h2>
// }


const welcomeMess = <h2 className="welcome-mess"> welcome {props.username}</h2>

const loginPrompt =<h2 className="login-mess"> Please check log in to continue </h2>
return(
    props.isLoggedIn ?   welcomeMess : loginPrompt
);



}

UserGreeting.prototype={
    isLoggedIn :proptypes.bool,
    username :proptypes.string

}

UserGreeting.defaultProps ={
isLoggedIn:false,
username :"Guest"

}

export default UserGreeting