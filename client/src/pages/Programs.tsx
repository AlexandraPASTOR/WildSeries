import { useEffect, useState } from "react";
import banniere from "../assets/images/banniere.jpg";

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
        <div
          className="relative w-full h-[40vh] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${banniere})` }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Liste des séries disponibles
            </h1>
          </div>
        </div>

        <ul className="flex justify-center m-4 gap-4">
          {programs.map((program) => (
            <article
              key={program.id}
              className="mb-8 p-4 border rounded-lg shadow-md w-1/2 h-[520px] flex flex-col items-center bg-gray-100"
            >
              <h2 className="text-lg font-semibold">{program.title}</h2>
              {program.synopsis && (
                <p className="text-gray-600 mt-2 text-xs">{program.synopsis}</p>
              )}
              {program.poster && (
                <img
                  src={program.poster}
                  alt={program.title}
                  className="w-2/3 mx-auto rounded-2xl mt-2"
                />
              )}
              {program.country && (
                <p className="text-gray-600 mt-2 text-xs">
                  Pays: {program.country}
                </p>
              )}
              {program.year && (
                <p className="text-gray-600 text-xs">Année: {program.year}</p>
              )}
            </article>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Programs;
