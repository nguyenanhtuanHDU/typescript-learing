enum Color {
  RED,
  GREEN,
  BLUE,
}

const getColor = (color: Color) => {
  switch (color) {
    case Color.RED:
      console.log('...red');
      break;
    case Color.GREEN:
      console.log('...green');
      break;
    case Color.BLUE:
      console.log('...blue');
      break;

    default:
      break;
  }
};

getColor(Color.BLUE) // ...blue
