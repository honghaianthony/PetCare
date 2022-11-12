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
          <div className="basic-info">
            <div className="avt">
              <img
                src="https://jumbo.g-axon.work/images/logos/project-logo-3.png"
                alt=""
              />
            </div>
            <ul>
              <li className="id">#19521292</li>
              <li className="fullname">Tran Binh Chuongxxxxxxx</li>
              <li className="gender">Nam</li>
            </ul>
          </div>
          <ul className="account-info">
            <li className="username">chuongtb</li>
            <li className="password">pass*****</li>
            <li className="phonenumber">099999999</li>
          </ul>

          <Icon
            className="edit"
            icon="bxs:edit"
            onClick={() => setEditOpen(true)}
          />
        </div>
      </div>

      {editOpen && <EditUser close={() => setEditOpen(false)} />}
    </>
  );
};
export default UserItem;
