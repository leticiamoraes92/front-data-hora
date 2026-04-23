import { useEffect, useState } from "react";

function App() {
  const [dataHora, setDataHora] = useState("");

  useEffect(() => {
    fetch("https://api-programa-1jkn.onrender.com")
      .then((res) => res.json())
      .then((dados) => {
        setDataHora(dados.date);
      })
      .catch(() => {
        setDataHora("Erro ao conectar API");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Data e Hora</h1>
      <h2>{dataHora}</h2>
    </div>
  );
}

export default App;