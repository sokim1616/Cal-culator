export default function (nutrients) {
  const entries = Object.entries(nutrients);
  if (entries.some((el) => el[1] > 0)) {
    entries.sort((a, b) => b[1] - a[1]);
    return entries.slice(0, 3);
  } else {
    return "please eat something or you might die";
  }
}
