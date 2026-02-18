import { use, useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router";
import { useParams } from "react-router";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fethcedData = async () => {
      try {
        const response = await fetch(`https://swapi.info/api/people/`);

        const data = await response.json();
        setPost(data);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fethcedData();
  }, []);

  return (
    <div>
      {post.map((item) => (
        <div>
          link
          {item.name}, {item.height}, {item.mass}, {item.skin_color}
        </div>
      ))}
    </div>
  );
}

export default App;

//https://swapi.info/api/people/schema
