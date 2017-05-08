import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


export class Header extends Component {
    render() {
      return (
        <View >
          <Text style={styles.heading}>Ibrahim's First Native-App</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  heading: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '33',
    color: 'red'
  }
});