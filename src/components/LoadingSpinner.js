import React from 'react';
import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <Oval
      height={80}
      width={80}
      color="blue"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="blue"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default LoadingSpinner;
