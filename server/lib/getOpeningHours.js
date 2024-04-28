// Define the open hours for each day
const openHours = {
  monday: ["11:30", "12:00"],
  tuesday: ["11:30", "12:00"],
  wednesday: ["11:30", "12:00"],
  thursday: ["11:30", "12:00"],
  friday: ["11:30", "12:00"],
  saturday: ["11:30", "12:00"],
  sunday: ["08:30", "12:00"],
};

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
  const openTime = addTime(openHours[currentDay][0]);
  const closeTime = addTime(openHours[currentDay][1]);

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