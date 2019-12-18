import createDataContext from './CreateDataContex';


const blogReducer = (state, action) => {

  switch(action.type){
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map((blogPost) => {

          return blogPost.id === action.payload.id ? action.payload: blogPost; });
    case 'add_blogpost':
      return [...state, 
        { 
          id: Math.floor(Math.random() * 99999), 
          title: action.payload.title,
          content: action.payload.content,
        }];
    default:
      return state;
  }

};

const addBlogPost = ( dispatch ) =>{
  return (title, content, callBack) => {
      dispatch({type: 'add_blogpost', payload: {title, content}});
      if (callBack){
        callBack();
      }
  }
};


const editBlogPost = ( dispatch ) =>{
  return (id, title, content, callBack) => {
      dispatch({type: 'edit_blogpost', payload: {id, title, content}});
      if (callBack){
      callBack();
    }
  };
};


const deleteBlogPost = ( dispatch ) =>{
  return (id) => {
      dispatch({type: 'delete_blogpost', payload: id});
  }
};

export const { Contex, Provider} = createDataContext(
          blogReducer,
          {addBlogPost, deleteBlogPost, editBlogPost}, 
          [{title: "sddsdsd", content: "fjfjfhfh", id: 1}]
  );