//Отображение пользователей табличкой
import React from 'react';
import UserData from './UserData';

export default ({ data, update }) => {
  if (!data) { return (<p>Loading...</p>); }//если нет данных

  const users = data.map((user, index) => {
    return (<UserData user={user} index={index} key={`user-${index}`} update={update} />);
  });

  return (
    <table className="user-list table table-striped">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        {users}
      </tbody>
    </table>
  );
};