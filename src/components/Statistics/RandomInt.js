const randomInt = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
};

export default getRandomColor;
