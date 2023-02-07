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
        {mockNotifications.map((notification) => (
          <Card notification={notification} />
        ))}
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
    type: "post",
    imageUrl: "https://i.pravatar.cc/150?img=1",
    date: "2023-01-16T03:24:00",
  },
  {
    id: 2,
    username: "Angela Gray",
    content: "followed you",
    boldContent: "",
    privateMessage: "",
    type: "follow",
    imageUrl: "https://i.pravatar.cc/150?img=2",
    date: "2023-01-15T03:24:00",
  },
  {
    id: 3,
    username: "Jacob Thompson",
    content: "has joined the group",
    boldContent: "Chess Club",
    privateMessage: "",
    type: "group",
    imageUrl: "https://i.pravatar.cc/150?img=3",
    date: "2023-01-14T03:24:00",
  },
  {
    id: 4,
    username: "Rizky Hasanuddin",
    content: "sent you a private message",
    boldContent: "",
    privateMessage: "",
    type: "message",
    imageUrl: "https://i.pravatar.cc/150?img=4",
    date: "2023-01-13T03:24:00",
  },
  {
    id: 5,
    username: "Kimberly Smith",
    content: "commented on your picture",
    privateMessage: "",
    boldContent: "",
    type: "comment",
    imageUrl: "https://i.pravatar.cc/150?img=5",
    date: "2023-01-12T03:24:00",
  },
  {
    id: 6,
    username: "Nathan Peterson",
    content: "reacted to your recent post",
    privateMessage: "",
    type: "post",
    boldContent: "5 end-game strategies to increase your win rate",
    imageUrl: "https://i.pravatar.cc/150?img=6",
    date: "2023-01-11T03:24:00",
  },
  {
    id: 7,
    username: "Anna Kim",
    content: "left the group",
    boldContent: "Chess Club",
    privateMessage: "",
    type: "group",
    imageUrl: "https://i.pravatar.cc/150?img=7",
    date: "2023-01-10T03:24:00",
  },
];
