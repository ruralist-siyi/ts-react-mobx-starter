import React from 'react';

const DyCompnent = component => {
  const LazyComponent = component;
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
};

export default DyCompnent;
