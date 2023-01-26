import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function EditProductPage(props) {

  const [productToUpdate, setProductToUpdate] = useState(null);
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setProductToUpdate(location.state.product);
  }, [location]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedProducts = props.products.map((product) => {
      if (product.id === productToUpdate.id) {return productToUpdate} else return product
    })
    props.setProducts([...updatedProducts]);
    navigate(-1)
  }
  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditProductPage;
