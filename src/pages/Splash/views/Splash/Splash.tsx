import React from 'react';

import { type SplashProps } from './useSplash';
export type { SplashProps } from './useSplash';
import { Container } from './styledSplash';

const Splash = ({ className }: SplashProps) => {
  return <Container className={className}></Container>;
};

export default Splash;
