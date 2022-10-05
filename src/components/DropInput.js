import { StyleSheet, Text, TextInput, View, FlatList, Pressable, Modal } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

const searchListExample = ['იყიდება', 'ქირავდება']; 

const DropInput = ({dispatch}) => {

  const [searchList, setSearchList] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSearchList(searchListExample);
    setIsOpen(false);
  }, [searchList])

  const handlePress = (item) => {
    setIsOpen(false);
    setSearchWord(item);
    dispatch({type: `${searchWord}`})
  }


  return (
      <View style={s.mainContainer}>
        <View style={s.container}>
          <TextInput 
            placeholder='გარიგების ტიპი'
            style={s.inputStyle}
            value={searchWord}
            keyboardShoulPersistTabs={false}
           />
          <Pressable onPress={() => setIsOpen(true)} style={s.selectIcon}>
            <SimpleLineIcons name="arrow-down" size={14} color="black" />
          </Pressable>       
        </View>
        <Modal style={s.modal} visible={isOpen} transparent={true}>
          <View style={s.modalContainer}>
            <FlatList 
              data={searchList}
              contentContainerStyle={s.flatlistStyle}
              showsVerticalScrollIndicator={false} 
              renderItem={({item}) => 
              <Pressable onPress={() => handlePress(item)} style={s.listInputs}>
                <Text>{item}</Text>
              </Pressable>
          }/>
          </View>
        </Modal>
      </View>
  )
}

export default DropInput;

const s = StyleSheet.create({
  mainContainer: {
  },
  container: {
    marginHorizontal: 24,
    marginTop: 10,
    height: 42,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(217, 215, 215, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  selectIcon: {
    paddingLeft: '100%',
    marginLeft: -150,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputStyle: {
  },
  modalContainer: {
    justifyContent: 'flex-start',
    marginTop: 155,
    marginHorizontal: 28,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 8,
  },
  flatlistStyle: {
    borderRadius: 2,
  },
  listInputs: {
    height: 42,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 0.5,
  }
})