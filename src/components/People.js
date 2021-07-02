import { useEffect, useState } from "react";

import { LetterSection } from "./LetterSection";

export function People({ people }) {
  const [firstLetters, setFirstLetters] = useState(new Set());

  useEffect(() => {
    people.forEach((person) => {
      const letter = person.name[0].toLocaleUpperCase();
      setFirstLetters((prev) => new Set(prev).add(letter));
    });
  }, [people]);

  return (
    <section className="people-section">
      {[...firstLetters].map((letter) => {
        return <LetterSection key={letter} letter={letter} people={people} />;
      })}
    </section>
  );
}
