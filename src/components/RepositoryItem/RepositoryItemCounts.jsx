import React from 'react';
import { View } from 'react-native';
import Text from '../../components/Text';


const RepositoryItemCounts = ({ count, text }) => {
  
  const stats = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num);
  };

  return (
    <View>
      <Text
        fontWeight="bold"
        fontSize="subheading"
        style={{ alignSelf: 'center' }}
        testID={`item${text}`}
      >
        {stats(count)}</Text>
      <Text fontWeight="bold" fontSize="subheading">{text}</Text>
    </View>
  );
};

export default RepositoryItemCounts;