import user from './data/user.json';
import Profile from './user/Profile';
import data from './data/data.json'
import Statistics from './statistics/Statistics';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: 10,
      }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" 
        stats={data}
        />


    </div>
  );
};
