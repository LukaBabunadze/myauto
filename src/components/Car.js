import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const Car = ({name, price, year, run, desc}) => {
  return (
    <Pressable style={s.container}>
        <View style={s.headerWrapper}>
            <View>
                <View style={s.header}>
                    <Text style={s.name}>Id: {name}</Text>
                    <Text style={s.year}>{year}</Text>
                </View>
                <Text style={s.price}>Price: {price} Gel</Text>
            </View>
            <Image style={s.image} source={{uri: 'https://img.freepik.com/premium-vector/classic-car-illustration_73313-147.jpg'}}/>
            <Text style={s.run}>{run} კმ</Text>
        </View>
        <View style={s.desc}>
            <Text style={s.descText} ellipsizeMode='tail' numberOfLines={6}>{desc}</Text>
        </View>
    </Pressable>
  )
}

export default Car;

const s = StyleSheet.create({
    container: {
        height: 450,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 10,
        marginVertical: 5,
    },
    headerWrapper: {
        borderBottomWidth: 1,
        height: 320,
        borderBottomColor: '#d6d6d6'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        fontWeight: '700'
    },
    year: {
        fontSize: 14,
        fontWeight: '700'
    },
    price: {
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: '500'
    },
    image: {
        height: '68%',
        width: '100%',
    },
    run: {
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: '500' 
    },
    desc: {
        paddingTop: 16,
        paddingHorizontal: 2,
        height: 110,
        overflow: 'hidden',
    },
    descText: {
        textAlign: 'justify',
        lineHeight: 14,
        fontWeight: '300',
        fontSize: 12,
    }
})