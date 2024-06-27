const form = document.getElementById('horoscope-form');
const result = document.getElementById('result'); // Not used here

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value;
    const birthMonth = document.getElementById('birth-month').value;

  let sign;
  switch (birthMonth) {
    case "January":
      sign = "Aquarius";
      break;
    case "February":
      sign = "Pisces";
      break;
    case "March":
      sign = "Aries";
      break;
    case "April":
      sign = "Taurus";
      break;
    case "May":
      sign = "Gemini";
      break;
    case "June":
      sign = "Cancer";
      break;
    case "July":
      sign = "Leo";
      break;
    case "August":
      sign = "Virgo";
      break;
    case "September":
      sign = "Libra";
      break;
    case "October":
      sign = "Scorpio";
      break;
    case "November":
      sign = "Sagittarius";
      break;
    default:
      sign = "Please select a month.";
  }

  const message = `Hi ${name}, your horoscope sign is ${sign}`;
  window.alert(message); // Use alert() for a separate window prompt
});
