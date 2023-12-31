import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <header>
      <h2 className="section__header">{title}
        {extraHeaderContent}
      </h2>
    </header>
    <div className="section__body">
      {body}
    </div>
  </section>
);

export default Section;