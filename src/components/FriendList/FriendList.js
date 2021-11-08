import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p
            className={s.name}
            style={isOnline ? { color: 'green' } : { color: 'red' }}
          >
            {name}
          </p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
