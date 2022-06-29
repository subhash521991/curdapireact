import React from 'react'
import { useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper'

function ProductCreate() {
  const [state, setState] = React.useState({
    title: '',
    image: '',
    errors: {},
  });

  const {
    title, image, errors,
  } = state;

  const onStateChange = (key, value) => {
    const update = {
      ...state,
      [key]: value,
    }

    setState(update);
  }

 
  let navigate = useNavigate();
  const submit = (e)=>{
 
    e.preventDefault();
    const error = {};
    if (title === '') {
      error.title = true;
    }
    if (image === ''){
      error.image = true;
    }

    if (Object.keys(error).length > 0) {
      onStateChange('errors', error);
      return;
    }

    fetch('http://localhost:3004/products', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({title, image})

    }).then(()=>{navigate('/admin/products');})

  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
          <label>Title</label>
          <input type="text" name="title" onChange={e=>onStateChange('title', e.target.value)} />
          { errors?.title && (
            'This field is required'
          )}
          <label>Image</label>
          <input type="text" name="image" onChange={e=>onStateChange('image', e.target.value)} />
          { errors?.image && (
            'This field is required'
          )}
          <button type='submit'>Add product</button>
      </form>

    </Wrapper>
  )
}

export default ProductCreate