import { ContactPerson } from "./ContactPerson";

export function LetterSection({ letter, people }) {
  return (
    <div className="letter-section">
      <p className="letter-section__letter">
        <b>{letter}</b>
      </p>

      <div className="letter-section__people">
        {people.map((person) => {
          const firstLetter = person.name[0].toLocaleUpperCase();

          if (firstLetter === letter) {
            return <ContactPerson person={person} letter={letter} />;
          }
        })}
      </div>
    </div>
  );
}
