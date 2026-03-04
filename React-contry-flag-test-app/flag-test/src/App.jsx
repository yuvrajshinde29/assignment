import Flag from "react-world-flags";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>ISO3 Country Flags Test</h2>

      <Flag code="IND" height="32" />
      <br/>
      <Flag code="USA" height="32" />
      <br/>
      <Flag code="AUS" height="32" />
    </div>
  );
}

export default App;
