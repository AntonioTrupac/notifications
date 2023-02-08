import Avatar from "./Avatar";

import { timeAgo } from "./util";

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
  className?: string;
  count: number;
}

const Card = ({ notification, className, count }: CardProps) => {
  const relativeTime = timeAgo(notification.date);

  return (
    <div
      className={`relative mb-2 inline-flex w-full items-start py-[18px] pl-5 pr-8 ${
        count > 0 && notification.id <= 3 ? "bg-light-gray" : ""
      }`}
    >
      <Avatar imageUrl={notification.imageUrl} alt={notification.username} />

      <div className="ml-5 inline-block">
        <a href="#" className="font-extrabold active:text-primary-blue">
          {notification.username}
        </a>

        <span className="ml-1 text-dark-grayish">{notification.content}</span>

        {notification.boldContent && (
          <a
            href="#"
            className={`relative ml-1 font-extrabold text-dark-grayish active:text-primary-blue ${
              notification.type === "group"
                ? "text-primary-blue"
                : "text-dark-grayish"
            }`}
          >
            {notification.boldContent}
          </a>
        )}

        {notification.id <= 3 && count > 0 && (
          //red dot
          <div className="ml-1 inline-block h-[8px] w-[8px] rounded-full bg-primary-red" />
        )}

        <div className="mt-[3px] text-dark-grayish">{relativeTime}</div>
      </div>
    </div>
  );
};

export default Card;
{
  /* <div className="ml-5 flex-col">
        <div className="break-words">
          <a href="#" className="font-extrabold active:text-primary-blue">
            {notification.username}
          </a>

          <span>
            <span className="ml-1 text-dark-grayish">
              {notification.content}
            </span>

            {notification.id <= 3 &&
              count > 0 &&
              notification.boldContent == "" && (
                //red dot
                <div className="top-0 ml-1 h-[8px] w-[8px] flex-shrink-0 rounded-full bg-primary-red" />
              )}
          </span>

          {notification.boldContent && (
            <>
              <a
                href="#"
                className={`relative ml-1 font-extrabold text-dark-grayish active:text-primary-blue ${
                  notification.type === "group"
                    ? "text-primary-blue"
                    : "text-dark-grayish"
                }`}
              >
                {notification.boldContent}
              </a>

              {notification.id <= 3 && count > 0 && (
                //red dot
                <div className="top-0 ml-1 h-[8px] w-[8px] flex-shrink-0 rounded-full bg-primary-red" />
              )}
            </>
          )}
        </div>

        <div className="mt-[3px] text-dark-grayish">{relativeTime}</div>
      </div> */
}
