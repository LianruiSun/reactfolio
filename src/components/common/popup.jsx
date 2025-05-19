import React from "react";
import Popup from "reactjs-popup";
import "./styles/popup.css";
import INFO from "../../data/user";
import useFetchData from "../../dynamoDB/useFetchData";
import CourseTable from "./courseTable";

const PopupButton = () => {
  const { data, loading, error } = useFetchData(
    "https://bsqq755yetyzs2bu2nm5pgfayi0npoms.lambda-url.us-east-1.on.aws/"
  );

  return (
    <Popup
      trigger={
        <button className="circle-button">
          <img
            src={INFO.main.popup}
            alt="Open education popup"
            className="circle-button-image"
          />
        </button>
      }
      modal
      closeOnDocumentClick
      closeOnEscape
      lockScroll
      overlayStyle={{ background: "rgba(0,0,0,0.2)" }}
      contentStyle={{ background: "transparent", border: "none", padding: 0 }}
    >
      {close => (
        /* Clicking anywhere (even inside) closes the popup */
        <div className="popup-content" onClick={close} role="dialog">
          <div className="redboard">
            <h2>Education</h2>
          </div>

          <div className="whiteboard">
            <div className="header-row">
              <img
                src={INFO.main.WPI}
                alt="WPI Logo"
                className="WPI-logo"
              />
              <h3>Worcester Polytechnic Institute</h3>
            </div>

            <h4>Bachelor of Science</h4>
            <p>
              Aug 2021 – May 2025
              <br />
              Major: Computer Science
              <br />
              <strong>Department GPA:</strong> 3.88
              <br />
              <strong>Cumulative GPA:</strong> 3.73
            </p>
          </div>

          {loading ? (
            <p>Loading…</p>
          ) : error ? (
            <p>Error loading courses: {error.message}</p>
          ) : (
            <CourseTable data={data} />
          )}
        </div>
      )}
    </Popup>
  );
};

export default PopupButton;