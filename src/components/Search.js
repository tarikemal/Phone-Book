import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { db } from "../firebase";

export function Search({ people }) {
  const [query, setQuery] = useState("");
  const [queryPeople, setQueryPeople] = useState([]);
  const [latestCalls, setLatestCalls] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("latest-calls")
      .orderBy("createdAt")
      .limit(100)
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setLatestCalls(data.reverse());
      });

    return unsubscribe;
  }, [db]);

  const searchQuery = () => {
    if (query === "") {
      setQueryPeople([]);
      return;
    }

    const isAllDigits = /^\d+$/.test(query);
    console.log(isAllDigits);
    let newPeople = [];

    if (isAllDigits) {
      newPeople = people.filter((person) => {
        const phone = person.phone.replaceAll(" ", "");
        // const newQuery = query.replaceAll(" ", "");
        console.log(phone);
        return phone.includes(query);
      });
    } else {
      newPeople = people.filter((person) => {
        const name = person.name.toLocaleLowerCase();
        return name.includes(query.toLocaleLowerCase());
      });
    }

    console.log(newPeople);

    setQueryPeople(newPeople);
  };

  useEffect(() => {
    searchQuery();
  }, [query]);

  return (
    <section className="search-section">
      <div className="search-section__input">
        <Link to="/">
          <span className="material-icons arrow-icon">arrow_back_ios</span>
        </Link>
        <input
          placeholder="Search people and places"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="material-icons">mic</span>
      </div>

      <div className="latest-calls-text">
        <p>{queryPeople.length > 0 && "People"} </p>
        <p>{!query && "Latest calls"}</p>
      </div>

      {!query && (
        <div className="latest-calls">
          {latestCalls.map((call) => {
            console.log("call");
            return (
              <div className="latest-calls__call">
                <p>{call.name}</p>
                <p className="latest-calls__call--date">{call.date}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="letter-section__people">
        {queryPeople &&
          query &&
          queryPeople.map((person) => {
            const firstLetter = person.name[0].toLocaleUpperCase();
            return (
              <div className="letter-section__people--content">
                <div className="letter-section__people--letter">
                  {firstLetter}
                </div>
                <h4 className="letter-section__people--name">{person.name}</h4>
                <p className="letter-section__people--phone">{person.phone}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
