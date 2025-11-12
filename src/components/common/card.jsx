import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/card.css";

const Card = (props) => {
const { icon, title, body } = props;

return (
<div className="card">
<div className="card-container">
<div className="card-header">
{icon && (
<div className="card-icon">
<FontAwesomeIcon icon={icon} />
</div>
)}
{title && <div className="card-title">{title}</div>}
</div>
<div className="card-body">{body}</div>
</div>
</div>
);
};

export default Card;
