import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContainerApp } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import SearchError from 'components/SearchErrorView';
import Button from 'components/Button';
import Loader from 'components/Loader/Loader';
import fetchImages from 'components/Api/service-Api';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setIsLoading(true);

    fetchImages(searchQuery, page)
      .then(({ totalHits, hits }) => {
        if (!totalHits) {
          throw new Error(`This search "${searchQuery}" is not found`);
        } else {
          setImages(images => [...images, ...hits]);
          setStatus('resolved');
          setTotalPages(Math.round(totalHits / 12));
          setScroll(document.documentElement.scrollHeight);
        }
      })
      .catch(error => {
        setError(`This search "${searchQuery}" is not found`);
        setStatus('rejected');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery, page]);

  useEffect(() => {
    if (!scroll || page === 1) {
      return;
    }
    window.scrollTo({
      top: scroll - 240,
      behavior: 'smooth',
    });
  }, [scroll, page]);

  const handleFormSubmit = searchQuery => {
    setPage(1);
    setSearchQuery(searchQuery);
    setImages([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <ContainerApp>
      <Searchbar getQueryName={handleFormSubmit} />
      <ToastContainer autoClose={3000} rtl />
      {status === 'rejected' && <SearchError message={error} />}
      {status === 'resolved' && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {status === 'resolved' && totalPages > page && (
        <Button onClick={loadMore} />
      )}
    </ContainerApp>
  );
}

export default App;
