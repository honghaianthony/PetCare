import "./UserItem.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import EditUser from "../EditUser";

const UserItem = () => {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <div className="user-item">
        <div className="user-item-body">
          <ul className="basic-info">
            <li className="id">#19521292</li>
            <li className="fullname">Tran Binh Chuong</li>
            <li className="gender">Nam</li>
          </ul>
          <ul className="account-info">
            <li className="username">chuongtb</li>
            <li className="password">pass*****</li>
            <li className="phonenumber">099999999</li>
          </ul>
          <ul className="more">
            <li className="role">Admin</li>
            <li className="method">
              <Icon className="see-detail" icon="akar-icons:eye" />
              <Icon
                className="edit"
                icon="bxs:edit"
                onClick={() => setEditOpen(true)}
              />
            </li>
          </ul>
        </div>
      </div>

      {editOpen && <EditUser close={() => setEditOpen(false)} />}
    </>
  );
};
export default UserItem;
