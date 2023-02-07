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
          <Card
            key={notification.id}
            notification={notification}
            className="mb-2 flex items-start py-[18px] pl-5 pr-8"
          />
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
    date: "2022-10-30T14:01:59.689Z",
  },
  {
    id: 2,
    username: "Angela Gray",
    content: "followed you",
    boldContent: "",
    privateMessage: "",
    type: "follow",
    imageUrl: "https://i.pravatar.cc/150?img=2",
    date: "2022-01-15T14:01:59.689Z",
  },
  {
    id: 3,
    username: "Jacob Thompson",
    content: "has joined the group",
    boldContent: "Chess Club",
    privateMessage: "",
    type: "group",
    imageUrl: "https://i.pravatar.cc/150?img=3",
    date: "2022-01-14T14:01:59.689Z",
  },
  {
    id: 4,
    username: "Rizky Hasanuddin",
    content: "sent you a private message",
    boldContent: "",
    privateMessage: "",
    type: "message",
    imageUrl: "https://i.pravatar.cc/150?img=4",
    date: "2022-01-13T14:01:59.689Z",
  },
  {
    id: 5,
    username: "Kimberly Smith",
    content: "commented on your picture",
    privateMessage: "",
    boldContent: "",
    type: "comment",
    imageUrl: "https://i.pravatar.cc/150?img=5",
    date: "2022-01-12T14:01:59.689Z",
  },
  {
    id: 6,
    username: "Nathan Peterson",
    content: "reacted to your recent post",
    privateMessage: "",
    type: "post",
    boldContent: "5 end-game strategies to increase your win rate",
    imageUrl: "https://i.pravatar.cc/150?img=6",
    date: "2022-01-11T14:01:59.689Z",
  },
  {
    id: 7,
    username: "Anna Kim",
    content: "left the group",
    boldContent: "Chess Club",
    privateMessage: "",
    type: "group",
    imageUrl: "https://i.pravatar.cc/150?img=7",
    date: "2022-01-10T14:01:59.689Z",
  },
];
