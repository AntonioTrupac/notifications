import Avatar from "./Avatar";

interface CardProps {
  notification: {
    id: number;
    username: string;
    content: string;
    boldContent?: string;
    privateMessage?: string;
    type: string;
    imageUrl: string;
    date: string;
  };
}

const Card = ({ notification }: CardProps) => {
  return (
    <div className="flex items-center py-[18px] pl-5 pr-8">
      <Avatar imageUrl={notification.imageUrl} alt={notification.username} />

      <div className="ml-5">
        <a href="#" className="font-extrabold active:text-primary-blue">
          {notification.username}
        </a>
        <span className="ml-1 text-dark-grayish">{notification.content}</span>
        {notification.boldContent && (
          <a
            href="#"
            className={`ml-1 font-extrabold text-dark-grayish active:text-primary-blue ${
              notification.type === "group"
                ? "text-primary-blue"
                : "text-dark-grayish"
            }`}
          >
            {notification.boldContent}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
