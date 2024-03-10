import React from 'react';
import { useContext } from 'react';
import { SearchContext } from './SearchContext';
import { UserCard } from '@components/UserCard/UserCard';
import "./style.css";

function SearchResults(): React.ReactElement {
  const { users } = useContext(SearchContext);

  return (
    <div className="usersList">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}

export default React.memo(SearchResults);
