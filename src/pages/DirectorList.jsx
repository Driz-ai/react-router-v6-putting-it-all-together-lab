




import { useOutletContext, Link } from "react-router-dom";

function DirectorList() {
  const { directors } = useOutletContext();

  return (
    <div>
      <h2>Directors</h2>

      <Link to="/directors/new">Add New Director</Link>

      {directors.map((d) => (
        <div key={d.id}>
          <Link to={`/directors/${d.id}`}>{d.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default DirectorList;