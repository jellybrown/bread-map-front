import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { bindHook } from '../../utils';
import { useExample } from './useExample';

export const Example = bindHook(useExample, ({ count, increase, decrease }) => (
  <View style={styles.container}>
    <Text>{count}</Text>
    <Button title={'up'} onPress={increase} />
    <Button title={'down'} onPress={decrease} />
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
