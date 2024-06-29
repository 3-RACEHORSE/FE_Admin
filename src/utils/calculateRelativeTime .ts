export const calculateRelativeTime = (utcTime: string) => {
  const now = new Date();
  const utcDate = new Date(utcTime);
  const diffMilliseconds = now.getTime() - utcDate.getTime();
  const diffSeconds = Math.abs(diffMilliseconds) / 1000;
  const resultTime = diffSeconds - 32400;
  const days = Math.floor(resultTime / 86400);
  const hours = Math.floor(resultTime / 3600) % 24;
  const minutes = Math.floor(resultTime / 60) % 60;

  if (days > 0) {
    return days === 1 ? `1일전` : `${days}일전`;
  } else if (hours > 0) {
    return `${hours}시간전`;
  } else {
    return minutes === 0 ? "지금" : `${minutes} 분전`;
  }
};
