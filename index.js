function scuberGreetingForFeet(someValue) {

  let response

  if (someValue < 400) {
    response = "This one is on me!";
  }
  else if (someValue >= 400 && someValue <= 2000) {
    response = "That will be twenty bucks.";
  }
  else if (someValue >= 2000) {
    response = "I will gladly take your thirty bucks.";
  }
  if (someValue >= 2500) {
    response = "No can do.";
  }
  return response
}

function ternaryCheckCity(city) {

  const isCity = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';

  return isCity;
}

function switchOnCharmFromTip(tip) {

  let response;

  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response
}