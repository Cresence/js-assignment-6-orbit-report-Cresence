import satData from "./satData";

const Buttons = (props) => {
  const {displaySats, filterByType, setSat} = props;
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        )
      })}
      <button onClick={satData => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;