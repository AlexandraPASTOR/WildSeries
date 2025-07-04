import { useNavigate } from "react-router";

import ProgramForm from "../components/ProgramForm";

function ProgramNew() {
  const navigate = useNavigate();

  const newProgram = {
    name: "",
    title: "",
    synopsis: "",
    poster: "",
    country: "",
    year: 0,
  };

  return (
    <ProgramForm
      defaultValue={newProgram}
      onSubmit={(programData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/programs`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(programData),
        })
          .then((response) => response.json())
          .then((data) => {
            navigate(`/programs/${data.insertId}`);
          });
      }}
    >
      Ajouter
    </ProgramForm>
  );
}

export default ProgramNew;
