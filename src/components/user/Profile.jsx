// import PropTypes from "prop-types";
import user from '../user/user.json'
import PropTypes from 'prop-types'
import styles from '../user/User.module.css'

const Profile = ({username, tag, location, avatar, stats, followers, views, likes}) => {
    return (
        <div className={(styles["profile"])}>
            <div className={(styles["description"])}>
        <img src={user.avatar}
        alt={user.username} 
        className={(styles["avatar"])}/>
            </div>
            <p className={(styles["name"])}>{user.username}</p>
            <p className={(styles["tag"])}>@{user.tag}</p>
            <p className={(styles["location"])}>{user.location}</p>
            <ul className={(styles["stats"])}>
                <li>
                    <span className={(styles["label"])}>Followers</span>
                    <span className={(styles["quantity"])}>{user.stats.followers}</span>
                </li>
                <li>
                    <span className={(styles["label"])}>Views</span>
                    <span className={(styles["quantity"])}>{user.stats.views}</span>
                </li>
                <li>
                    <span className={(styles["label"])}>Likes</span>
                    <span className={(styles["quantity"])}>{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};

export default Profile;



