export const formatDurationTime = (value: number): string => {
  const minute = Math.floor(value / 60);
  const secondLeft = value - minute * 60;
  return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
};
