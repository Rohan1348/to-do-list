//exporting the getDate
exports.getDate = function() {
  const today = new Date(); //creating new object for Date
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-us", options);
};

//exporting the getDay
exports.getDay = function() {
  const today = new Date(); //creating new object for Date
  const options = {
    weekday: "long"
  };
  return today.toLocaleDateString("en-us", options);
};

// getDate or getDay will be exported when asked
