import React from 'react'
import { cblProvider } from 'react-native-cbl'
import { Container, Header, Title, Content, Button, Left, Right, Body, Text,
  List, ListItem } from 'native-base'
import { View } from 'react-native'

@cblProvider( props => ({
  notes: {
    query: `SELECT *, _id ORDER BY title ${props.sortDirection === 1 ? '' : 'DESC'}`,
    params: {},
  },
}))
export default class NoteList extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            {
              this.props.notes.map( note =>
                <ListItem key={note._id} onPress={() => this.props.onNotePress(note._id)}>
                  <View>
                    <Text>{note.title}</Text>
                    <Text>{note.text}</Text>
                  </View>
                </ListItem>
              )
            }
          </List>
        </Content>
      </Container>
    )
  }
}
