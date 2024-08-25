import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ isLoading }) => {
  return (
    <ClipLoader
      color='#4338ca'
      isLoading={isLoading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;