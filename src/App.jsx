import React from "react";
import Title from "./components/Title";
import { useFetchData } from "./hooks/useFetchData";
import Dog from "./components/Dog";

function App() {
  const { data, isLoading } = useFetchData("/dogs");
  if (isLoading) return "Laster data...";
  return (
    <div>
      <Title>Sysdogs</Title>
      <div className="dog-container">
        {data.map((dog) => (
          <Dog title={dog.title} image={dog.image} key={dog.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
