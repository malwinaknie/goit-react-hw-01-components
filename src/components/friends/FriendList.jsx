const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <li className="item"
                    key={id}>
                        <span className="status">{isOnline}</span>
                        <img className="avatar"
                        src={avatar} 
                        alt={name} />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
</ul>
    )
}

export default FriendList;