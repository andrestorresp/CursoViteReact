import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["andres", "alfonzo", "torres"];
  return (
    <Card>
      <CardBody title="holamundo" text="este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
