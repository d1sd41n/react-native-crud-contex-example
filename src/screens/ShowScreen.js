import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import {Contex} from '../contex/BlogContex';

const ShowScreen = ({ navigation }) => {
// const { state, addBlogPost, deleteBlogPost} = useContext(Contex);
const { state } = useContext(Contex);

const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return (
    <View style={styles.container}>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({navigation}) => {
  return{
    headerRight: <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: navigation.getParam('id')})}>
                   <EvilIcons style={styles.icon} name="pencil" size={30} />
                 </TouchableOpacity>

  };
};

const styles = StyleSheet.create({
  container: {
  },
});

export default ShowScreen;