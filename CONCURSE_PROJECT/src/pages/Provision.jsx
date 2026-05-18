import { useParams } from "react-router"
import { useEffect, useState } from "react"

export default function Provision() {

    const { id } = useParams()

    const [provision, setProvision] = useState(null);
    
    useEffect(() => {
      fetch(`http://localhost:3000/provisions/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setProvision(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id]);

    return(
      <div>
        <h1>{provision.title}</h1>
        <p>{provision.content}</p>
      </div>
    );
}