import React, { LazyExoticComponent, ReactElement } from 'react';
import { RouteComponentProps } from 'react-router';

// eslint-disable-next-line
type LazyComponentType = LazyExoticComponent<React.ComponentType<any>>;
type DynamicReturn = (props: RouteComponentProps) => ReactElement;

const DyCompnent = (component: LazyComponentType): DynamicReturn => {
  const LazyComponent = component;

  return props => {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  };
};

export default DyCompnent;
