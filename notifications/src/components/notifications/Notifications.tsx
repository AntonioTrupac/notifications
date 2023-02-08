import Card from "./Card";
import Header from "./Header";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { mockNotifications } from "./util";

interface NotificationsProps {
  className?: string;
}

// using jotai here just to persist the count in local storage
// could have been done with useState as well but state would have been lost on refresh
// this is just to show how jotai can be used with other libraries
// the solution with the right api here would be to have a read/unread field in the notification object
// and then just filter the notifications array to get the count
// and then use the read/unread field to determine if the notification is read or not
// to read all notifications, we would just set the read field to true for all notifications via an POST api call or a mutation
// or through the cache if using something like apollo/react-query

export const unreadNotificationsCountAtom = atomWithStorage(
  "unreadNotifCount",
  mockNotifications.filter((notification) => !notification.read).length
);

const Notifications = ({ className }: NotificationsProps) => {
  const [count, setCount] = useAtom(unreadNotificationsCountAtom);

  return (
    <div className={className}>
      <Header count={count} setCount={setCount} />

      <div className="mt-8 h-full md:h-auto">
        {mockNotifications.map((notification) => (
          <Card
            count={count}
            key={notification.id}
            notification={notification}
            className={` ${
              notification.privateMessage ? "mb-0" : "mb-2"
            } inline-flex w-full items-start rounded-lg pt-[18px] pb-[17px] pl-5 pr-8 ${
              count > 0 && notification.id <= 3 ? "bg-light-gray" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
