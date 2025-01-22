const btn = document.getElementById("btn");
const input = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge() {
  const birthdayCalc = input.value;

  if (birthdayCalc === "") {
    alert(`Please Enter Your Birthday`);
  } else {
    const age = getAge(birthdayCalc);
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayCalc) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayCalc);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDay() < birthdayDate.getDay())
  ) {
    age--;
  }
  return age;
}

btn.addEventListener("click", calculateAge);
