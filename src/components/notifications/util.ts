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

export const mockNotifications = [
  {
    id: 1,
    username: "Jane Cooper",
    content: "reacted to your recent post",
    boldContent: "My first tournament today!",
    privateMessage: "",
    type: "post",
    imageUrl: "https://i.pravatar.cc/150?img=1",
    commentImage: "",
    date: "2022-10-30T14:01:59.689Z",
    read: false,
  },
  {
    id: 2,
    username: "Angela Gray",
    content: "followed you",
    boldContent: "",
    privateMessage: "",
    type: "follow",
    imageUrl: "https://i.pravatar.cc/150?img=2",
    commentImage: "",
    date: "2022-01-15T14:01:59.689Z",
    read: false,
  },
  {
    id: 3,
    username: "Jacob Thompson",
    content: "has joined the group",
    boldContent: "Chess Club",
    privateMessage: "",
    type: "group",
    imageUrl: "https://i.pravatar.cc/150?img=3",
    commentImage: "",
    date: "2022-01-14T14:01:59.689Z",
    read: false,
  },
  {
    id: 4,
    username: "Rizky Hasanuddin",
    content: "sent you a private message",
    boldContent: "",
    privateMessage: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    type: "message",
    imageUrl: "https://i.pravatar.cc/150?img=4",
    commentImage: "",
    date: "2022-01-13T14:01:59.689Z",
    read: true,
  },
  {
    id: 5,
    username: "Kimberly Smith",
    content: "commented on your picture",
    privateMessage: "",
    boldContent: "",
    type: "comment",
    imageUrl: "https://i.pravatar.cc/150?img=5",
    commentImage: "https://i.pravatar.cc/150?img=3",
    date: "2022-01-12T14:01:59.689Z",
    read: true,
  },
  {
    id: 6,
    username: "Nathan Peterson",
    content: "reacted to your recent post",
    privateMessage: "",
    type: "post",
    boldContent: "5 end-game strategies to increase your win rate",
    imageUrl: "https://i.pravatar.cc/150?img=6",
    commentImage: "",
    date: "2022-01-11T14:01:59.689Z",
    read: true,
  },
  {
    id: 7,
    username: "Anna Kim",
    content: "left the group",
    boldContent: "Chess Club",
    privateMessage: "",
    type: "group",
    imageUrl: "https://i.pravatar.cc/150?img=7",
    commentImage: "",
    date: "2022-01-10T14:01:59.689Z",
    read: true,
  },
];
