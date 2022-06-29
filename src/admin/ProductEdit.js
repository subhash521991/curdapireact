import React from 'react'
//import {useHistory} from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper'

function ProductEdit(props) {

 // const [title, setTitle] = useState('');
 // const [image, setImage] = useState('');

 const [state, setState] = React.useState({
  title: '',
  image: '',
});

const {
  title, image,
} = state;

const onStateChange = (key, value) => {
  const update = {
    ...state,
    [key]: value,
  }

  setState(update);
} 
  let navigate = useNavigate();
  const {id} = useParams();

  React.useEffect(()=>{
    fetch(`http://localhost:3004/products/${id}`)
    .then(res =>res.json())
    .then(product => {
      const { title: editTitle, image: editImage } = product;

      const updates = { ...state };

      if (editTitle)
        updates.title = editTitle;
      if (editImage)
        updates.image = editImage;


      setState(updates);

       // eslint-disable-line
    })
  
  }, [id]) 

  console.log(title);

  const submit = (e)=>{
 
e.preventDefault();
fetch(`http://localhost:3004/products/${id}`, {

method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body:JSON.stringify({title, image})

}).then(()=>{navigate('/admin/products');})

  }

  return (
    <Wrapper>
      <form onSubmit={submit}>

<label>Title</label>
<input type="text" name="title" defaultValue={title} onChange={(e) => onStateChange('title', e.target.value)} />
<label>Image</label>
<input type="text" name="image" defaultValue={image} onChange={(e) =>onStateChange('image', e.target.value)} />
<button type='submit'>Save</button>
      </form>

    </Wrapper>
  )
}


export default ProductEdit;