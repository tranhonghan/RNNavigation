import React from 'react';
import { View, Text, Button } from 'react-native';
import * as appConstant from '../constants/appConstant'

export class DetailsScreen extends React.Component {
    constructor(props) {
        super(props)

        this.value = this.props.navigation.getParam("data1")
        this.data2 = this.props.navigation.getParam("data2")
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>Value: {this.value}</Text>
          <Text>Data 2: {this.data2}</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push(appConstant.SCREEN.DETAILS)}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate(appConstant.SCREEN.HOME)}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }