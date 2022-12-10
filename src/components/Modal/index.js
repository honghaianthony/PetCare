import { useState } from "react";
import { Icon } from "@iconify/react";
import "./Modal.css";
import { async } from "@firebase/util";
export default function Modal({
  onConfirm,
  onCancel,
  onSuccess,
  onFailure,
  onHandle,
}) {
  const [res, setRes] = useState({ errCode: 0, mess: "" });
  return (
    <div className="modal">
      <div className="modal-layer"></div>;
      <div className="modal-container">
        {res.errCode === 0 && <h2>Xác nhận yêu cầu</h2>}
        {res.errCode === 200 && (
          <>
            <div className="loading-delay"></div>
            <div className="icon-modal">
              <Icon
                icon="mdi:success-circle-outline"
                className="icon-modal-success"
              />
            </div>
            <h2>{res.mess}</h2>
          </>
        )}
        {res.errCode === 201 && (
          <>
            <div className="loading-delay"></div>
            <div className="icon-modal">
              <Icon
                icon="material-symbols:cancel-outline"
                className="icon-modal-failure"
              />
            </div>
            <h2>{res.mess}</h2>
          </>
        )}

        {res.errCode === 0 && (
          <>
            <button
              className="confirm"
              onClick={async () => {
                const r = await onHandle();
                setRes(r);
                if (r.errCode === 200)
                  setTimeout(() => {
                    onConfirm();
                  }, 4000);
                else
                  setTimeout(() => {
                    onCancel();
                  }, 4000);
              }}
            >
              Xác nhận
            </button>
            <button className="cancel" onClick={() => onCancel()}>
              Hủy bỏ
            </button>
          </>
        )}
      </div>
    </div>
  );
}
