import "./UserItem.css";
import { Icon } from "@iconify/react";

const UserItem = () => {
  return (
    <div className="user-item">
      <div className="user-item-body">
        <ul className="basic-info">
          <li
            style={{
              background: "#2B3674",
              width: "fit-content",
              color: "#ffffff",
              padding: "0px 5px",
              borderRadius: "5px",
            }}
            className="id"
          >
            #19521292
          </li>
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
            <Icon className="edit" icon="bxs:edit" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserItem;
