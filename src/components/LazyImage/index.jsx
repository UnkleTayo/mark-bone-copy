import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const MyImage = ({ image, ...rest }) => (
  <LazyLoadImage {...rest} alt={image} effect="blur" src={image} />
);
