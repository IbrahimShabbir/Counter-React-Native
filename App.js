import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Header } from './src/components/header'
// import { homeComponent } from './src/components/home'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      increment: 0
    }
  }
  increment(){
    this.setState ({
      increment: this.state.increment + 1
  },()=>{
    console.log(this.state.increment)
   })
  }

  reset(){
    this.setState ({
      increment: 0
    },()=>{
      console.log(this.state.increment)
    })
  }
    render() {
    return (
    <View style={styles.container}>   
      <Header />
        <TouchableOpacity onPress={this.increment.bind(this)}>
          <Text>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.reset.bind(this)}>
          <Text>Reset</Text>
        </TouchableOpacity>  
        <Text>{this.state.increment}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
