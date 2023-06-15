var str1 = "race";
var str2 = "care";

function checkifAnagram(str1, str2) {
  const str1Map = {};

  Array.from(str1).forEach((s) => {
    str1Map[s] = (str1Map[s] || 0) + 1;
  });

  Array.from(str2).forEach((s) => {
    if (str1Map.hasOwnProperty(s)) {
      str1Map[s]--;
    } else {
      str1Map[s] = (str1Map[s] || 0) + 1;
    }
  });

  for (let s in str1Map) {
    if (str1Map[s] !== 0) {
      return false;
    }
  }

  return true;
}
