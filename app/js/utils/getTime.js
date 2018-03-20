const format = n => (n > 9 ? n : `0${n}`);

export default function getTime() {
  const date = new Date();
  const d = date.getDate();
  const m = 1 + date.getMonth();
  const y = 1900 + date.getYear();

  const h = date.getHours();
  const min = date.getMinutes();

  return `${format(h)} : ${format(min)}     ${format(m)} / ${format(d)} / ${y}`;
}

