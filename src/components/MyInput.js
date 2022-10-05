import { StyleSheet, Text, TextInput, View, FlatList, Pressable, Modal } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

const MyInput = ({priceFrom, priceTo, handleChange}) => {

  return (
      <View style={s.mainContainer}>
        <View style={s.container}>
          <TextInput 
            placeholder='ფასი -დან'
            style={s.inputStyle}
            keyboardShoulPersistTabs={false}
            keyboardType='numeric'
            value={priceFrom}
            onChangeText={handleChange('priceFrom')}
          />
          <View style={s.inputSplitter}><Text></Text></View>
          <TextInput 
            placeholder='-მდე'
            style={s.inputStyleTwo}
            keyboardShoulPersistTabs={false}
            keyboardType='numeric'
            value={priceTo}
            onChangeText={handleChange('priceTo')}
          />         
        </View>
      </View>
  )
}

export default MyInput;

const s = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 28,
  },
  container: {
    width: '100%',
    marginTop: 10,
    height: 42,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(217, 215, 215, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  inputStyle: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
  },
  inputStyleTwo: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
    marginRight: 16,
  },
  inputSplitter: {
    borderRightWidth: 0.4,
    height: 16,
    borderRightColor: 'black',
  }
})