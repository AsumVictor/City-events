// Define the open hours for each day
const days = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  6: "friday",
  7: "saturday",
};

function isOpen(openHours) {
  const date = new Date();
  const currentDay = days[date.getDay()];

  const openTime = addTime(openHours.get(currentDay)[0]);
  const closeTime = addTime(openHours.get(currentDay)[1]);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;
  let currentTime = addTime(formattedTime);

  if (currentTime >= openTime && currentTime <= closeTime) {
    return true;
  } else {
    return false;
  }
}

function addTime(time) {
  let hours = Number(time.split(":")[0]);
  let minute = Number(time.split(":")[1]);

  return hours + minute / 60;
}


module.exports = isOpen