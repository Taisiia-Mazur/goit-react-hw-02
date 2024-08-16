import css from "./FriendListItem.module.css";

export default function FriendListItem({
  oneFriend: { avatar, name, isOnline },
}) {
  const statusClass = [css.status];
  if (isOnline) {
    statusClass.push(css.online);
  } else {
    statusClass.push(css.offline);
  }

  return (
    <div className={css.boxFr}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClass.join(" ")}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
