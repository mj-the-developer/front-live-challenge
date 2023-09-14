export const formatSortText = (text: string) => {
  return text.charAt(0) === '-' ? text.slice(1) : text;
};
