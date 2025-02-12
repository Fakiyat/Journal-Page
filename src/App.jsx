import Header from "./componets/Header";
import Entry from "./componets/Entry";
import data from "./data";
// USe of Props for reusablity

function App() {
  const dataElement = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        img={{ src: entry.img.src, alt: entry.img.alt }}
        title={entry.entry_title}
        country={entry.country}
        loaction={entry.location}
        date={entry.entry_date}
        text={entry.entry_text}
      />
    );
  });
  return (
    <main>
      <Header />
      <div className="contacts"> {dataElement}</div>
    </main>
  );
}

export default App;
