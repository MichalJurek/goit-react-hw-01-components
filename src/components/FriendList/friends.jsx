import PropTypes from 'prop-types';
import css from './friends.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <li key={item.name} className={css.user}>
          <div className={css.status}>
            <span style={{ color: item.status.online ? 'green' : 'red' }}>
              •
            </span>
          </div>
          <img src={item.avatar} alt={item.name} className={css.avatar} />
          <span className={css.name}>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      status: PropTypes.shape({
        offline: PropTypes.bool.isRequired,
        online: PropTypes.bool.isRequired,
      }),
    })
  ).isRequired,
};

export default FriendsList;
