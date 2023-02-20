const randomNumber = async () => {
  const response = await fetch(
    `http://www.randomnumberapi.com/api/v1.0/random?min=10&max=50`
  );
  const randomNum = await response.json();
  console.log(randomNum);
  return randomNum;
};

randomNumber();
export default randomNumber;
