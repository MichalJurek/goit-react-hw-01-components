// JSON
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
//JSX
import Profile from './Profile/profile.jsx';
import Statistics from './Statistics/statistics.jsx';
import FriendsList from './FriendList/friends.jsx';
import TransactionHistory from './TransactionHistory/transactions.jsx';

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
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
