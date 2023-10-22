import styles from './Friends.module.css';
import propTypes from 'prop-types';
import clsx from 'clsx';

const FriendList = ({friends}) => {
    return (
        <ul className={(styles["friend-list"])}>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <li className={(styles["item"])}
                    key={id}>
                        <span className={clsx(styles.status, 
                        {[styles.isOnline] : isOnline})}>
                            {isOnline}</span>
                        <img className={(styles["avatar"])}
                        src={avatar} 
                        alt={name} />
                        <p className={(styles["name"])}>{name}</p>
                    </li>
                )
            })}
</ul>
    )
}

FriendList.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
    id: propTypes.number,
}

export default FriendList;