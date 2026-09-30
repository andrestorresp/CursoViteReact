import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;

export function App() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);
  return (
    <>
      <h1>app de gatos</h1>
      <p>{fact}</p>
    </>
  );
}
export default App;
