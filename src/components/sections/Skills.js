export default function Skills({ preview, info, onChange, del }) {
  switch (preview) {
    case true:
      return (
        <section className="skills">
          {info.skills.length !== 0 && (
            <div>
              <h2>{info.skillsTitle}</h2>
              <ul>
                {info.skills.map((item) => (
                  <li key={item.id}>{item.str}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      );
    default:
      return info.skills.map((item) => (
        <section className="skills">
          <input
            placeholder="Skill here"
            id="skill"
            value={item.str !== '' ? item.str : ''}
            onChange={(e) => {
              onChange(e, item.id, 'str');
            }}
          />
          <button
            type="button"
            id="delete"
            onClick={() => {
              del('skills', item.id);
            }}
          >
            <i className="fa-solid fa-trash" /> Delete
          </button>
        </section>
      ));
  }
}
