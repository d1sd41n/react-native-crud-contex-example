import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';

import {Contex} from '../contex/BlogContex';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Contex);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return <BlogPostForm 
                initialValues={{title: blogPost.title, content: blogPost.content}}
                onSubmit={(title, content) => {
                    editBlogPost(id, title, content, () => navigation.pop());
            }}
/>
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
      fontSize: 20,
      marginBottom: 10,
  },
  });

export default EditScreen;