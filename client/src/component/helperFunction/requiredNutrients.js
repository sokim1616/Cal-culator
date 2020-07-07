export default function (nutrients, status) {
  const entries = Object.entries(nutrients);
  if (entries.some((el) => el[1] > 0)) {
    if (status === "inNeed") {
      entries.sort((a, b) => a[1] - b[1]);
    } else if (status === "dontNeed") {
      entries.sort((a, b) => b[1] - a[1]);
    }
    return entries.slice(0, 3);
  } else {
    return "please eat something or you might die";
  }
}
