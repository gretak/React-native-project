import React, { Component } from 'react';
import { Modal, AppRegistry, TouchableHighlight, StyleSheet, Image, Text, View, Button } from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
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

      //modal setup
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

         <View style={{marginTop: 22}}>

            <View>
               <Text style={styles.modal}>Hello World!</Text>
               <TouchableHighlight onPress={() => {
                 this.setModalVisible(!this.state.modalVisible)
               }}>
                 <Text style={styles.modal}>Hide Component</Text>
               </TouchableHighlight>
            </View>

            <View style={styles.container}>
              <Text style={styles.modal}>{movie.title}</Text>
              <Text style={styles.modal}>{movie.year}</Text>
              <Image source={{uri: movie.posters.thumbnail}} 
                style={styles.thumbnail}
                />
            </View>

         </View>

        </Modal>

        <View style={{flex: 1, backgroundColor: 'steelblue'}}/>

          <Text style={{flex: 1, backgroundColor: 'powderblue', textAlign: 'center'}}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>

          <View style={{flex: 1, backgroundColor: 'skyblue'}}>

          //just testing the data from movies array
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
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
