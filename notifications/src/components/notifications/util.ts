const units = [
  { label: "year", seconds: 31536000 },
  { label: "month", seconds: 2592000 },
  { label: "week", seconds: 604800 },
  { label: "day", seconds: 86400 },
  { label: "hour", seconds: 3600 },
  { label: "minute", seconds: 60 },
  { label: "second", seconds: 1 },
];

export const timeAgo = (date: string | number | Date) => {
  // new Date().valueOf() returns the number of milliseconds since 1 January 1970 00:00:00 UTC
  const time = Math.floor(
    (new Date().valueOf() - new Date(date).valueOf()) / 1000
  );

  const { interval, unit } = calculateTimeDifference(time);
  const suffix = interval === 1 ? "" : "s";
  return `${interval} ${unit}${suffix} ago`;
};

const calculateTimeDifference = (timeInMs: number) => {
  // loop over the units and find the largest one that fits into the timeInMs
  for (let unit of units) {
    const interval = Math.floor(timeInMs / unit.seconds);
    // if the interval is greater than or equal to 1, we have found the unit we are looking for
    if (interval >= 1) {
      return {
        interval: interval,
        unit: unit.label,
      };
    }
  }

  return {
    interval: 0,
    unit: "",
  };
};