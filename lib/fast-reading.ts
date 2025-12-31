export function parseText(text: string) {
  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    const ptr = words[i].length / 2;
    const first_half = words[i].slice(0, ptr);
    const second_half = words[i].slice(ptr, words[i].length);

    words[i] = `<b>${first_half}</b>${second_half}`;
  }
  return words.join(" ");
}
