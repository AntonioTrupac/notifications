import Header from "./Header";

interface NotificationsProps {
  className?: string;
}

const Notifications = ({ className }: NotificationsProps) => {
  return (
    <div className={className}>
      <Header />
    </div>
  );
};

export default Notifications;
