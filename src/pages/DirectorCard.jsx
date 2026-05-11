



import {
  useParams,
  useOutletContext,
  Link,
  Outlet,
} from "react-router-dom";

function DirectorCard() {
  const { id } = useParams();
  const { directors } = useOutletContext();

  const director = directors.find((d) => d.id === id);

  if (!director) {
    return <h2>Director not found</h2>;
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>

      <h3>Movies</h3>

      <Link to={`/directors/${id}/movies/new`}>
        Add New Movie
      </Link>

      {director.movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/directors/${id}/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </div>
      ))}

      {/* PASS CONTEXT TO CHILD ROUTES */}
      <Outlet context={{ directors }} />
    </div>
  );
}

export default DirectorCard;