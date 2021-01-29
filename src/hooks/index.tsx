import React from 'react';
import { MoviesProvider } from './Movies';

const AppProvider: React.FC = ({ children }) => (
  <MoviesProvider>
    {children}
  </MoviesProvider>
);
export default AppProvider;
