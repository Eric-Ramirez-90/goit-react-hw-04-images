import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Button, Form, Input, SearchbarHeader } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

class Searchbar extends Component {
  static propType = {
    getQueryName: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: '',
  };

  handlQueryChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (!this.state.searchQuery.trim()) {
      toast.error('Please enter a search name');
      return;
    }

    this.props.getQueryName(this.state.searchQuery);

    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <FcSearch size="30" />
          </Button>

          <Input
            className="input"
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handlQueryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
