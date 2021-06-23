import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { sendApiQuery } from '../../store/actions/actions';

import styles from './SearchBar.module.scss';

const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendApiQuery(inputValue));
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        value={inputValue}
        className={styles.searchInput}
        placeholder="Type your city here"
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
        }}
      />
      <button className={styles.searchButton} />
    </form>
  );
};

export default SearchBar;
