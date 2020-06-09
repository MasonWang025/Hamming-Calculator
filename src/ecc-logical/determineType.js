export default function determineType(str) {
  // either returns type or error code
  /*
    0: input error
    1: binary
    2: hex
    3: decimal
    */
  // determine which base it is currently in
  // NaN
  if (isNaN(str)) return 0;
  // hex
  else if (str.startsWith("0x")) return 2;
  // binary
  else if (str.startsWith("0b")) return 1;
  // decimal
  else return 3;
}
