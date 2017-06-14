import React, { Component } from 'react';
import { Modal, AppRegistry, TouchableHighlight, StyleSheet, Image, Text, View, Button } from 'react-native';

var MOCKED_MOVIES_DATA = [
  { title: 'Title',
    year: '2015',
    posters: {
      thumbnail: 'http://i.imgur.com/UePbdph.jpg'
    }
  },
];

export default class AwesomeProject extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    var movie = MOCKED_MOVIES_DATA[0];

    return (
      <View style={{flex: 1}}>

        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

         <View style={styles.containerMain}>
            <View>
               <TouchableHighlight onPress={() => {
                 this.setModalVisible(!this.state.modalVisible)
               }}>
                 <Text style={styles.modal}>Hide Component</Text>
               </TouchableHighlight>
            </View>

            <View style={styles.container}>
              <Image 
                source={{uri: movie.posters.thumbnail}} 
                style={styles.thumbnail}
              />
              <View style={styles.rightContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
              </View>
            </View>

         </View>
        </Modal>

        <View style={{flex: 1, backgroundColor: 'steelblue'}}/>

          <Text style={{flex: 1, backgroundColor: 'powderblue', textAlign: 'center'}}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>

          <View style={{flex: 1, backgroundColor: 'skyblue'}}>

            <Text style={styles.modal}>{movie.year}</Text>
            <Button
            onPress={() => {this.setModalVisible(true) }}
            title="Next page"
            color="#841585"
            accessibilityLabel="Learn more about this purple button"/>

           </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
  },
  modal: {
    fontSize: 30,
    height: 40,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerMain: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
