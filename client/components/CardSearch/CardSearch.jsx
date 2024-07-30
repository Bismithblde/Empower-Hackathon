import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

const SearchBar = ({ budgetsArray, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const fuse = new Fuse(budgetsArray, {
    keys: ['name'], // Adjust this to match the key(s) you want to search by
    includeScore: true,
  });

  useEffect(() => {
    const filteredBudgets = searchTerm
      ? fuse.search(searchTerm).map(result => result.item)
      : budgetsArray;

    onFilter(filteredBudgets);
  }, [searchTerm, budgetsArray, fuse, onFilter]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search budgets..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;