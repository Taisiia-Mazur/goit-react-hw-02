import css from "./Profile.module.css"

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.boxGeneral}>
      <div className={css.boxAbout}>
              <img className={css.image} src={avatar} alt={username} width="80" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.tag}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.spanTitle}>Followers</span>
          <span className={css.spanContain}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.spanTitle}>Views</span>
          <span className={css.spanContain}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.spanTitle}>Likes</span>
          <span className={css.spanContain}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
