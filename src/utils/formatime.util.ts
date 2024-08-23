export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const t = date.toLocaleTimeString().split(" ");
  const tt = t[0].split(":");
  const newTime = `${tt[0]}:${tt[1]} ${t[1]}`;
  const d = date.toDateString().split(" ");
  const newDate = `${d[1]} ${d[2]}, ${d[3]}`;
  return `${newDate} ${newTime}`;
};
