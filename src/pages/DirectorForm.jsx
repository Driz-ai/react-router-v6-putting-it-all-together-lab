




import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function DirectorForm() {
  const navigate = useNavigate();
  const { directors, setDirectors } = useOutletContext();

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newDirector = {
      id: crypto.randomUUID(),
      name,
      bio: "",
      movies: [],
    };

    setDirectors([...directors, newDirector]);

    navigate(`/directors/${newDirector.id}`);
  }

  return (
    <div>
      <h2>Add New Director</h2>

      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default DirectorForm;