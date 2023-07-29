// eslint-disable-next-line no-unused-vars
import satData from "./satData";
// eslint-disable-next-line no-unused-vars
import style from "./styling.css";

const Buttons = ({displaySats, filterByType, setSat}) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        )
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;