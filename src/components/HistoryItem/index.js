import React from "react";
import "./HistoryItem.css";

function HistoryItem(props) {
  return (
    <div className="HistoryItem">
      <div className="HistoryItem-Status">
        <span className={"HistoryItem-Status" + props.status}>
          {props.statusName}
        </span>
      </div>
      <div className="HistoryItem-Product">
        {props.item.map((item, index) => {
          return (
            <div className="HistoryItem-Product-Detail" key={index}>
              <div className="HistoryItem-Product-Detail-Img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="HistoryItem-Product-Detail-Infor">
                <p>{item.name}</p>
                <p className="HistoryItem-Product-Detail-Infor-p">
                  <span>x{item.amount}</span>
                  <span>{item.price}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="HistoryItem-Price">
        <p>
          <span>Tổng thanh toán: </span>
          <span>{props.price}</span>
        </p>
      </div>
    </div>
  );
}
export default HistoryItem;
