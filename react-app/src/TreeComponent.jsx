import React from 'react';
import './TreeComponent.css';

const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let index = 0;
const nextColour = () => {
  const colour = colours[index];
  index++;
  if (index >= colours.length) {
    index = 0;
  }

  return colour;
}

function TreeComponentFlip({ node }) {
  const { drawKey, left, right } = node;
  const [flipped, setFlipped] = React.useState(true);
  const colour = React.useMemo(nextColour);

  console.log(`Evaluated ${drawKey}`);

  return (
    <div className={`tree ${colour}`}>
      <button onClick={() => {setFlipped(!flipped)}}>Update</button>
      <div className="nodes">
        { flipped
          ? <>
            { left && <TreeComponentFlip node={left} /> }
            { right && <TreeComponentFlip node={right} /> }
          </>
          : <>
            { right && <TreeComponentFlip node={right} /> }
            { left && <TreeComponentFlip node={left} /> }
          </>
        }
      </div>
    </div>
  );
}

function TreeComponentColour({ node }) {
  const { drawKey, left, right } = node;
  const [colour, setColour] = React.useState(nextColour);

  console.log(`Evaluated ${drawKey}`);

  return (
    <div className={`tree ${colour}`}>
      <button onClick={() => {setColour(nextColour())}}>Update</button>
      <div className="nodes">
        { left && <TreeComponentColour node={left} /> }
        { right && <TreeComponentColour node={right} /> }
      </div>
    </div>
  );
}

function TreeComponent({ node }) {
  const { drawKey, left, right } = node;
  const [state, setState] = React.useState(true);

  console.log(`Evaluated ${drawKey}`);

  return (
    <div className={`tree ${nextColour()}`}>
      <button onClick={() => {setState(!state)}}>Update</button>
      <div className="nodes">
        { left && <TreeComponent node={left} /> }
        { right && <TreeComponent node={right} /> }
      </div>
    </div>
  );
}

export default TreeComponentColour;
