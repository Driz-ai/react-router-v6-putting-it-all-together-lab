import { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function MovieForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { directors, setDirectors } = useOutletContext();

  const director = directors.find((d) => d.id === id);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [genres, setGenres] = useState("");

  if (!director) return <h2>Director not found</h2>;

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      id: uuidv4(),
      title,
      time: parseInt(time),
      genres: genres.split(",").map((g) => g.trim()),
    };

    const updatedDirectors = directors.map((d) =>
      d.id === id
        ? { ...d, movies: [...d.movies, newMovie] }
        : d
    );

    setDirectors(updatedDirectors);

    navigate(`/directors/${id}/movies/${newMovie.id}`);
  }

  return (
    <div>
      <h2>Add New Movie</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Duration"
        />
        <input
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          placeholder="Genres"
        />
        <button>Add Movie</button>
      </form>
    </div>
  );
}

export default MovieForm;