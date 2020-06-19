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

export default nextColour;
