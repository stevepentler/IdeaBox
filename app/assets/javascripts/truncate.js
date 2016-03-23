function truncate(string) {
  if (string.length > 100) {
    return string.substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";
  } else
  return string;
}