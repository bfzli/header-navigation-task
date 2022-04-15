import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../redux/slices/settings/themeSlice';
import languageSlice from '../redux/slices/settings/languageSlice';

const Storage = configureStore({
  reducer: {
    theme: themeSlice,
    language: languageSlice,
  },
});

export default Storage;