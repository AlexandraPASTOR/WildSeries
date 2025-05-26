import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis?: string;
  poster?: string;
  country?: string;
  year?: number;
}

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
      });
  }, []);

  return (
    <>
      <section>
        <h1>Bienvenue sur la page des séries !</h1>
        <ul>
          {programs.map((program) => (
            <li key={program.id}>
              <h2>{program.title}</h2>
              {program.synopsis && <p>{program.synopsis}</p>}
              {program.poster && (
                <img src={program.poster} alt={program.title} />
              )}
              {program.country && <p>Pays: {program.country}</p>}
              {program.year && <p>Année: {program.year}</p>}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Programs;
