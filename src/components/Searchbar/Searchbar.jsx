import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Button, Form, Input, SearchbarHeader } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

function Searchbar({ getQueryName }) {
  const [searchQuery, setsearchQuery] = useState('');

  const handlQueryChange = evt => {
    setsearchQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!searchQuery.trim()) {
      toast.error('Please enter a search name');
      return;
    }

    getQueryName(searchQuery);

    setsearchQuery('');
  };

  return (
    <SearchbarHeader>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <FcSearch size="30" />
        </Button>

        <Input
          className="input"
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handlQueryChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchbarHeader>
  );
}

Searchbar.propTypes = {
  getQueryName: PropTypes.func.isRequired,
};

export default Searchbar;
