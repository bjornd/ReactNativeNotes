import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'native-base'
import NoteList from './note-list'

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Notes',
    headerRight: (
      <View style={{flexDirection: 'row'}}>
        <Button
          transparent
          onPress={navigation.getParam('onSortPress')}
          ><Text>Sort</Text></Button>
        <Button
          transparent
          onPress={() => navigation.navigate('NoteModal')}
        ><Text>Add</Text></Button>
      </View>
    ),
  })

  state = {
    sortDirection: 1,
  }

  onNotePress = noteId => {
    this.props.navigation.navigate('Note', { noteId })
  }

  componentDidMount() {
    this.props.navigation.setParams({ onSortPress: this.onSortPress });
  }

  onSortPress = () => {
    this.setState( ({sortDirection}) => ({sortDirection: sortDirection * -1}) )
  }

  render() {
    return (
      <NoteList sortDirection={this.state.sortDirection} onNotePress={this.onNotePress} />
    )
  }
}
