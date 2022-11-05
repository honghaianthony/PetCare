import "./UserDashboard.css";
import UserList from "./UserList";
const UserDashboard = () => {
  return (
    <>
      <div className="user-dashboard">
        <div className="user-dashboard-container">
          <UserList />
        </div>
      </div>
    </>
  );
};
export default UserDashboard;
