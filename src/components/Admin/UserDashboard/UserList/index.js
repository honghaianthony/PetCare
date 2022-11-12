import { useState } from "react";
import UserItem from "../UserItem";
import "./UserList.css";

const UserList = () => {
  const data = { admin: [{}, {}, {}], user: [{}, {}, {}, {}, {}, {}] };
  const [filter, setFilter] = useState(1);
  return (
    <>
      <div className="user-list-container">
        <h1 className="title">Danh sách người dùng</h1>
        <div className="filter">
          <span
            className={filter === 1 ? "active" : ""}
            onClick={() => setFilter(1)}
          >
            Admin
          </span>
          <span
            className={filter === 2 ? "active" : ""}
            onClick={() => setFilter(2)}
          >
            User
          </span>
        </div>
        <div className="user-list">
          {filter === 1
            ? data.admin.map((item, idx) => <UserItem key={idx} />)
            : data.user.map((item, idx) => <UserItem key={idx} />)}
        </div>
      </div>
    </>
  );
};
export default UserList;
