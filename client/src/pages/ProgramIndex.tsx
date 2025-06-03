import { useEffect, useState } from "react";
import { Link } from "react-router";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function ProgramIndex() {
  const [programs, setPrograms] = useState([] as Program[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data: Program[]) => {
        setPrograms(data);
      });
  }, []);

  return (
    <>
      <Link to={"/programs/new"}>Ajouter</Link>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <Link to={`/programs/${program.id}`}>{program.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProgramIndex;
