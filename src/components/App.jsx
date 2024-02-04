import user from './Profile/user.json';
import Profile from './Profile/profile';
import data from './Statistics/data.json';
import Statistics from './Statistics/statistics';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics label="UPLOAD STATS" stats={data} />
    </div>
  );
}
