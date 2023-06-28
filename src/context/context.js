import React,{createContext, useContext, useEffect, useState} from 'react'
import { StyleSheet, Text, View,ActivityIndicator, FlatList } from 'react-native'



const moviedata= createContext();

const Context = ({children}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        console.log("hi")
        setData(json.movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getMovies();
    }, []);
  



    return (

    //   <View style={{flex: 1, padding: 24}}>
    //     {isLoading ? (
    //       <ActivityIndicator />
    //     ) : (
    //       <FlatList
    //         data={data}
    //         keyExtractor={({id}) => id}
    //         renderItem={({item}) => (
    //           <Text>
    //             {item.title}, {item.releaseYear}
    //           </Text>
    //         )}
    //       />
    //     )}
        
    //   </View>
    <moviedata.Provider value={data}>{children}</moviedata.Provider>
    
    );
}

export default Context
export {moviedata}

const styles = StyleSheet.create({})