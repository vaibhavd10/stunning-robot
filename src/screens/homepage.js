import React, {useContext, useEffect, useState,useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native';
import {moviedata} from '../context/context';

const Homepage = () => {
  const content = useContext(moviedata);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [fade,setFade ]= useState(false);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  console.log(content);
  return (
    <SafeAreaView style={{
      backgroundColor: 'lightpink',
    }}>
      <View style={{flexDirection:"column",padding:25, justifyContent:"center",alignItems:"center"}}>
        {fade === false ? ( 
        <TouchableOpacity style={{
          width:150,
          height:50,
          justifyContent:"center",
          borderRadius:10,
          backgroundColor:"#f2358a"
        }} onPress={()=>{
          fadeIn();
          setFade(true);
        }
        }>
          <Text style={{color:"black",textAlign:"center"}}>Show Movies</Text>
        </TouchableOpacity>):(
           <TouchableOpacity style={{
            width:150,
            height:50,
            justifyContent:"center",
            borderRadius:10,
            backgroundColor:"#f2358a"
          }} onPress={()=>{
            fadeOut();
            setFade(false)
          }}>
            <Text style={{color:"black",textAlign:"center"}}>Hide Movies</Text>
          </TouchableOpacity>
        )}
       
      </View>
           
          <View
      style={{
        padding: 10,
        paddingVertical: 20,
        flexDirection: 'row',
       
      }}>
       
            <Animated.View 
            style={[
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
      <FlatList
        data={content}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View
            style={{
              padding: 30,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              backgroundColor: '#f2358a',
              marginVertical: 20,
              borderRadius: 120,
              marginHorizontal: 190,
              paddingHorizontal: 20,
              elevation: 50,
            }}>
            <Image
              source={require('../assets/starwars.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                borderRadius: 80,
                justifyContent: 'center',
              }}
            />

            <Text style={{color: 'black', fontStyle: 'italic', fontSize: 20}}>
              {item.title}, {item.releaseYear}
            </Text>
          </View>
        )}
      />
      </Animated.View>
    </View>
    </SafeAreaView>
  );
};

export default Homepage;
