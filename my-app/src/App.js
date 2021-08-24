import FriendList  from './components/friend-list/FriendList';
import './App.css';

import user from './components/social-profile/user.json';
import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/statistics';
import statisticalData from './components/statistics/statistical-data.json';
import TransactionHistory from './transaction-history/TransactionHistory';
import transactions from './transaction-history/transactions.json'

function App() {
  return (
    <div>
     
            <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={statisticalData} />;
       <FriendList/>
<TransactionHistory items={transactions} />
     
        </div>
  );
}

export default App;


