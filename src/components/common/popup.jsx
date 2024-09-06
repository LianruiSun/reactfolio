import React from 'react';
import Popup from 'reactjs-popup';
import Draggable from 'react-draggable';
import './styles/popup.css';
import INFO from "../../data/user";
// import useDynamoDBData from "../../dynamoDB/useDynamoDBData";
import CourseTable from "./courseTable";
import useFetchData from "../../dynamoDB/useFetchData";

const PopupButton = () => {
    const { data, loading, error } = useFetchData('https://lfbshezzjo7xpbredxhmp5j6dq0bxhvh.lambda-url.us-east-1.on.aws/');

    return (
        <Popup
            trigger={
                <button className="circle-button">
                    <img src={INFO.main.popup} alt="Share" className="circle-button-image" />
                </button>
            }
            modal
            closeOnDocumentClick
            contentStyle={{ background: 'transparent', border: 'none', padding: 0 }}
        >
            {close => (
                <Draggable>
                    <div className="popup-content">
                        <div className="redboard">
                            <h2>Education</h2>
                        </div>
                        <div className="whiteboard">
                            <div className="header-row">
                                <img src={INFO.main.WPI} alt="WPI Logo" className="WPI-logo" />
                                <h3>Worcester Polytechnic Institute</h3>
                            </div>
                            <h4>Bachelors</h4>
                            <p>
                                Aug 2021 - May 2025<br />
                                Major in Computer Science (BS)<br />
                                <strong>Department GPA:</strong> 3.88<br />
                                <strong>Cumulative GPA:</strong> 3.73
                            </p>
                        </div>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error loading courses: {error.message}</p>
                        ) : (
                            <CourseTable data={data} />
                        )}
                    </div>
                </Draggable>
            )}
        </Popup>
    );
}

export default PopupButton;