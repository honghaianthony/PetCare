import UserItem from "../UserItem";
import "./UserList.css";

const UserList = () => {
  const data = [1, 1, 1, 1, 1];
  return (
    <>
      <h2>Danh sách người dùng</h2>
      <div className="user-list-container">
        {data.map((item, idx) => (
          <UserItem key={idx} />
        ))}
      </div>
    </>
  );
};
export default UserList;
