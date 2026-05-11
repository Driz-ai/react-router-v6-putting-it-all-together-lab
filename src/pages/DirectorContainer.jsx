
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function DirectorContainer() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <div>
      <Outlet context={{ directors, setDirectors }} />
    </div>
  );
}

export default DirectorContainer;