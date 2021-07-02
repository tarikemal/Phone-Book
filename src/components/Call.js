import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import { db } from "../firebase";
import firebase from "firebase/app";

export function Call({ people }) {
  const latestCallsCollection = db.collection("latest-calls");

  const { id } = useParams();
  const [calledPerson, setCalledPerson] = useState("");
  const [firstLetter, setFirstLetter] = useState("");
  // const [date, setDate] = useState("");

  useEffect(() => {
    const person = people.find((p) => p.id == id);
    const letter = person.name[0].toLocaleUpperCase();
    setCalledPerson(person);
    setFirstLetter(letter);
  }, []);

  useEffect(() => {
    //window.history.forward();
    function noBack() {
      window.history.forward();
    }
    return noBack;
  }, []);

  const addLastCall = async () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const today = month + " " + day;
    console.log("today: " + today);
    await latestCallsCollection.add({
      name: calledPerson.name,
      date: today,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <section className="call-section">
      <div className="call-section__calling">
        <p>Calling</p> <div className="dot-flashing"></div>
      </div>

      <h1 className="call-section__name">{calledPerson.name}</h1>
      <p className="call-section__phone">
        Phone Number
        <span className="call-section__phone--number">
          +1 {calledPerson.phone}
        </span>
      </p>
      <div className="call-section__letter">{firstLetter}</div>
      <div className="call-section__icons">
        <div className="call-section__icons--item">
          <a href="#">
            <span className="material-icons">volume_up</span>
          </a>
          <p>Speaker</p>
        </div>
        <div className="call-section__icons--item">
          <a href="#">
            <span className="material-icons">mic_off</span>
          </a>
          <p>Mute</p>
        </div>
        <div className="call-section__icons--item">
          <a href="#">
            <span className="material-icons">bluetooth</span>
          </a>
          <p>Bluetooth</p>
        </div>
        <div className="call-section__icons--item">
          <a href="#">
            <span className="material-icons">videocam</span>
          </a>
          <p>Live video</p>
        </div>
        <div className="call-section__icons--item">
          <a href="#">
            <span className="material-icons">keyboard_alt</span>
          </a>
          <p>Keyboard</p>
        </div>
        <div className="call-section__icons--item">
          <a href="#">
            <span className="material-icons">add</span>{" "}
          </a>
          <p>Add call</p>
        </div>
      </div>

      <div className="call-end-icon-container">
        <Link to="/" onClick={addLastCall}>
          <span className="material-icons call-end-icon">call_end</span>
        </Link>
      </div>
    </section>
  );
}
