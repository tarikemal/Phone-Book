import { Link } from "react-router-dom";

export function Header({ people }) {
  return (
    <section className="header-section">
      <div className="header-section__info">
        <h3 className="header-section__title">Phone Book</h3>
        <p className="header-section__number">{people.length} people</p>
      </div>

      <div className="header-section__icons">
        <a href="#">
          <span className="material-icons">add</span>
        </a>
        <Link to="/search">
          <span className="material-icons">search</span>
        </Link>
        <a href="#">
          <span className="material-icons">more_vert</span>
        </a>
      </div>
    </section>
  );
}
