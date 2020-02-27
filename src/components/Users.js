import React from "react";
import UserItem from "./Useritem";

class Users extends React.Component {
 
  render() {
    
    return (
      <div style={userStyle}>
        {this.props.obj.map(user => (
          <UserItem user={user} key={user.id}></UserItem>
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};
export default Users;
