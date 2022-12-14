export default function AddDescription({ preview, info, onChange }) {
  switch (preview) {
    case true:
      return (
        <section>
          {info.description !== '' && (
            <div>
              <h2>{info.descriptionTitle}</h2>
              <p>{info.description}</p>
            </div>
          )}
        </section>
      );
    default:
      return (
        <section>
          <h2 contentEditable="true">Description</h2>
          <textarea
            rows={3}
            placeholder="Description here"
            value={info.description !== '' ? info.description : ''}
            onChange={(e) => {
              onChange(e, 'description');
            }}
          />
        </section>
      );
  }
}
