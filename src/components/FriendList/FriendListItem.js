import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? s.online : s.offline;
  return (
    <li className={s.item}>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <div className={s.nameSection}>
        <span className={status} />
        <p
          className={s.name}
          style={isOnline ? { color: 'green' } : { color: 'red' }}
        >
          {name}
        </p>
      </div>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
