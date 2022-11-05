import UserItem from "../UserItem";
import "./UserList.css";

const UserList = () => {
  const data = [1, 1, 1, 1, 1];
  return (
    <>
      <div className="user-list-container">
        <h1 className="title">Danh sách người dùng</h1>
        <div className="user-list">
          {data.map((item, idx) => (
            <UserItem key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};
export default UserList;
