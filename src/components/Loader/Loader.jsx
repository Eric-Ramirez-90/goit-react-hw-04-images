import { FidgetSpinner } from 'react-loader-spinner';
import { ContainerLoader } from './Loader.styled';

const Loader = () => {
  return (
    <ContainerLoader>
      <FidgetSpinner height="150" width="150" />
    </ContainerLoader>
  );
};

export default Loader;
