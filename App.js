import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Image, Pressable, FlatList, ActivityIndicator } from 'react-native';
import MyInput from './src/components/MyInput';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DropInput from './src/components/DropInput';
import { useFormik } from 'formik';
import { useReducer, useState } from 'react';
import { fetchProducts } from './src/components/Api';
import Car from './src/components/Car';

let myAutoLogo = "data:image/png;base64,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";

export default function App() {

  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    buyOrSell: ''
  };

  const [buyState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'იყიდება':
        return {
          buyOrSell: 'buy',
        };
      case 'ქირავდება':
        return {
          buyOrSell: 'rent',
        };
      default:
        return state;
    }
  }, initialState)

  const {
    handleChange,
    handleSubmit,
    values,
  } = useFormik({
    initialValues: { sellingType: buyState.buyOrSell, priceFrom: '', priceTo: ''},
    onSubmit: values =>
      fetchProducts(values)
      .then(res => setCars(res))
      .then(res => setIsLoading(false))
      .catch((err) => alert(`Oops, ${err.message}`))
  });
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <View style={s.header}>
          <Image style={s.image} source={{uri: `${myAutoLogo}`}}/>
          <AntDesign style={s.searchIconStyle} name="search1" size={24} color="black" />
        </View>
        <DropInput dispatch={dispatch}/>
        <MyInput handleChange={handleChange} priceFrom={values.priceFrom} priceTo={values.priceTo}/>
        <StatusBar style="auto" />
        <View style={s.buttonWrapper}>
          <Pressable onPress={() => {handleSubmit(), setIsLoading(true)}} style={s.button}>
            <Text style={s.buttonText}>მოძებნე</Text>
          </Pressable>
        </View>
        <View style={s.carsWrapper}>
          <ActivityIndicator style={s.loading} animating={isLoading} size='large' color='blue'/>
          {cars.length > 0 &&
            <FlatList 
              data={cars} 
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.car_id}
              renderItem={({item}) => 
                <Car 
                  name={item.car_id}
                  price={item.price_value}
                  year={item.prod_year}
                  run={item.car_run}
                  desc={item.car_desc}
                />
              }
          />
        }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderBottomWidth: 0.2,
    borderBottomColor: '#d6d6d6',
  },
  image: {
    width: 140,
    height: 70,
  },
  searchIconStyle: {
    padding: 10,
    backgroundColor: 'rgba(217, 215, 215, 0.3)',
    borderRadius: 50,
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 26,
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#282A39',
    height: 46,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
  carsWrapper: {
    marginBottom: 280,
  },
  loading: {
    position: 'absolute',
    zIndex: 10,
    alignSelf: 'center',
    marginTop: 100
  }
});
