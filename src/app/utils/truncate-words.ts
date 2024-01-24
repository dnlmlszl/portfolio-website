export function truncateWithFullWords(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }

  let truncated = str.slice(0, num);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  if (lastSpaceIndex > 0) {
    truncated = truncated.slice(0, lastSpaceIndex);
  }

  return truncated + '...';
}
