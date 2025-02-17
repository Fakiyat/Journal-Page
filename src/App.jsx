import Header from "./componets/Header";
import Entry from "./componets/Entry";
import data from "./data";
// USe of Props for reusablity

function App() {
  const dataElement = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });
  return (
    <main>
      <Header />
      <div className="contacts"> {dataElement}</div>
    </main>
  );
}

export default App;
