import React from 'react';
import { css } from '@emotion/core';
import PulseLoader from 'react-spinners/PulseLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const FullPageLoader = (props) => {
  return (
    <div className={`${props.loading? 'fullpage-loader' : ''}`}>
      <PulseLoader
        css={override}
        size={20}
        margin={20}
        color={'#66D8B7'}
        loading={props.loading}
      />
    </div>
  );
};
export default FullPageLoader;
