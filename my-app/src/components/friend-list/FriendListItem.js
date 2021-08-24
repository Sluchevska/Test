import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem(props) {
  const {avatar, name, isOnline} = props
  return <li className="item">
    <span className="status">{ isOnline}</span>
  <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{ name}</p>
</li>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}

