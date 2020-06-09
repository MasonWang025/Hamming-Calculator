export default function toBinaryArray(str) {
  if (!str || isNaN(str)) return [];
  // convert to integer -> convert to binary string -> split into char array -> map to number
  if (str.startsWith("0b")) {
    return str.substring(2).split("").map(Number);
  }
  return parseInt(str).toString(2).split("").map(Number);
}
