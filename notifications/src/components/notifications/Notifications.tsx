import Card from "./Card";
import Header from "./Header";

interface NotificationsProps {
  className?: string;
}

const Notifications = ({ className }: NotificationsProps) => {
  return (
    <div className={className}>
      <Header />

      <div className="mt-8">
        <Card />
      </div>
    </div>
  );
};

export default Notifications;

const mockNotifications = [
  {
    id: 1,
    username: "Jane Cooper",
    content: "reacted to your recent post",
    boldContent: "My first tournament today!",
    privateMessage: "",
    date: "2023-01-16T03:24:00",
  },
  {
    id: 2,
    username: "Angela Gray",
    content: "followed you",
    boldContent: "",
    privateMessage: "",
    date: "2023-01-15T03:24:00",
  },
  {
    id: 3,
    username: "Jacob Thompson",
    content: "has joined the group",
    boldContent: "Chess Club",
    privateMessage: "",
    date: "2023-01-14T03:24:00",
  },
  {
    id: 4,
    username: "Rizky Hasanuddin",
    content: "sent you a private message",
    boldContent: "",
    privateMessage: "",
    date: "2023-01-13T03:24:00",
  },
  {
    id: 5,
    username: "Kimberly Smith",
    content: "commented on your picture",
    privateMessage: "",
    boldContent: "",
    date: "2023-01-12T03:24:00",
  },
  {
    id: 6,
    username: "Nathan Peterson",
    content: "reacted to your recent post",
    privateMessage: "",
    boldContent: "5 end-game strategis to increase your win rate",
    date: "2023-01-11T03:24:00",
  },
  {
    id: 7,
    username: "Anna Kim",
    content: "left the group",
    boldContent: "Chess Club",
    privateMessage: "",
    date: "2023-01-10T03:24:00",
  },
];
