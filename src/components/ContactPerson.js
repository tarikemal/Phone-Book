import { useState } from "react";

import { Link } from "react-router-dom";

export function ContactPerson({ person, letter }) {
  const [info, setInfo] = useState(false);

  return (
    <>
      <div
        className="letter-section__people--content"
        onClick={() => setInfo((info) => !info)}
      >
        <div className="letter-section__people--letter">{letter}</div>
        <h4 className="letter-section__people--name">{person.name}</h4>
      </div>

      {info && (
        <div className="letter-section__people__extra--info">
          <p>Phone Number: +1 {person.phone}</p>
          <div className="extra-info__icons">
            <Link to={`/call/${person.id}`}>
              <span className="material-icons call-icon">call</span>
            </Link>
            <a href="#">
              <span className="material-icons chat-icon">chat_bubble</span>
            </a>
            <a href="#">
              <span className="material-icons video-icon">videocam</span>
            </a>
            <a href="#">
              <span className="material-icons info-icon">info</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
