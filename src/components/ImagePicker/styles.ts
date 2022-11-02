import { StyleSheet } from 'react-native';

import { width } from '@config/Layout';

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  imageList: {
    marginBottom: 5,
  },
  imageContainer: {
    width: width - 60,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});
