import FriendList  from './components/FriendList';
import './App.css';

import user from './social-profile/user.json';
import Profile from './components/Profile';
import Statistics from './components/statistics';
import statisticalData from './statistics/statistical-data.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transaction-history/transactions.json'

function App() {
  return (
    <div>
      <FriendList/>
            <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
            />
<Statistics title="Upload stats" stats={statisticalData} />;
<TransactionHistory items={transactions} />
     
        </div>
  );
}

export default App;


