import React from 'react';
import { View, Text, Button } from 'react-native';
import * as appConstant from '../constants/appConstant'

export class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate(appConstant.SCREEN.DETAILS, {data1: "data is here", data2: "this is data2"})}
          />
        </View>
      );
    }
  }