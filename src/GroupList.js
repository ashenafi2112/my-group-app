import React from 'react';

const GroupList = () => {
  const groupMembers = ['Ashenafi Pawlos',
    'Atnasiya Abebe',
    'Ayub Sufiane',
    'Beamlak kagnew Megra',
    'Beamlak Solomon Mulatu ',
    'Bezawit Abate Ferenj',
    'Betelhem Wondale',
    'Betrearon Dereje',
    'Abiy Haregot',
    'Hanan yesuf',];

  return (
    <div>
      <h1>Group Members</h1>
      <ul>
        {groupMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
