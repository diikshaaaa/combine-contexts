import React from 'react';
import { combineComponents } from '../utils/combineComponents';
import ThemeContextProvider from './ThemeContext';
import AuthContextProvider from './AuthContext';

const providers = [
  ThemeContextProvider,
  AuthContextProvider,
]

export const AppContextProvider = combineComponents(...providers);