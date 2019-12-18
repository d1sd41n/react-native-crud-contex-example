import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';

import {Contex} from '../contex/BlogContex';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Contex);

    return <BlogPostForm 
                onSubmit={(title, content) => {
                    addBlogPost(title, content, () => navigation.navigate('Index'));
                  }}
           />
}

const styles = StyleSheet.create({
  container: {
  },
});

export default CreateScreen;