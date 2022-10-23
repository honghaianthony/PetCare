import EditUser from "./EditUser";
import "./UserDashboard.css";
import UserList from "./UserList";
const UserDashboard = () => {
  return (
    <>
      <div className="user-dashboard">
        <UserList />
      </div>
      <EditUser />
    </>
  );
};
export default UserDashboard;
