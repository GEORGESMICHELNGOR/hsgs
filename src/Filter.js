import React from 'react';

const Filter = ({ setFilterTitle, setFilterRate }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rate"
        onChange={(e) => setFilterRate(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
