import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.listFr}>
      {friends.map((friend) => {
        return (
          <li className={css.itemFr} key={friend.id}>
            <FriendListItem oneFriend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
