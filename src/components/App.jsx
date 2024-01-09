import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data}>Upload stats</Statistics>

      <TransactionHistory items={transactions} />
    </div>
  );
};
