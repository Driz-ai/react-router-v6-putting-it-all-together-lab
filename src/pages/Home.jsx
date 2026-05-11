import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Movie Directory</h1>

      <nav>
        <Link to="/directors">View Directors</Link> |{" "}
        <Link to="/about">Learn More</Link>
      </nav>
    </div>
  );
}

export default Home;
