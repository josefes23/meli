/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef, useState } from 'react';
import IconButton from '../buttons/IconButton';

const Header = ({ placeHolder, value, autofocus = false }) => {
  const [isEmptyState, setIsEmptyState] = useState(value === '' || value === undefined);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
      if (autofocus) inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (event) => {
    if (isEmptyState) event.preventDefault();
  };

  const handleOnChange = () => {
    setIsEmptyState(inputRef.current.value === '' || inputRef.current.value === undefined);
  };

  return (
    <header>
      <section className='container'>
        <div className='row justify-content-center no-gutters'>
          <div className='col-1'>
            <a className='nav-logo' href='/' label='logo' />
          </div>
          <div className='col-11 header-search'>
            <form className='nav-search' action='/items' method='GET' role='search' onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type='text'
                className='search-input'
                aria-label='Ingresá lo que quieras encontrar'
                maxLength='120'
                autoCapitalize='off'
                autoCorrect='off'
                autoComplete='off'
                tabIndex={0}
                name='search'
                placeholder={placeHolder}
                defaultValue={value}
                onChange={handleOnChange}
              />
              <IconButton type='submit' icon='icon-search' />
            </form>
          </div>
        </div>
      </section>
    </header>
  );
};

Header.defaultProps = {
  placeHolder: 'Nunca dejes de buscar',
  value: ''
};

export default Header;
