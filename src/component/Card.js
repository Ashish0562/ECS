import React from 'react';


const Card = (prop) => {

  // const [arr, setarr] = useState([])
  let arr=[]

    const handeladd = () => {

        // let cart =JSON.parse(localStorage.getItem('cart'));
        // console.log(cart);
      // localStorage.removeItem('cart')
        if (!arr.includes(prop.value.id)) {
          arr.push(prop.value.id);
          // setarr(prop.value.id)
      //     JSON.stringify(localStorage.setItem('cart', arr));
           alert('Product added to the cart');
        } else {
           alert('Product already in the cart');
        }
      };
      // console.log(arr);
      // console.log(prop.value.id);
  return (

    <div className='product-container'>
  
        <img src={prop.value.img} alt='products'/>
        <h3>{prop.value.brand}</h3>
        <p>{prop.value.category}</p>
        <p>${prop.value.price}</p>
        <div className='button'>
            <button onClick={handeladd} >ADD TO CARD</button>
        </div>
    </div>
  )
}

export default Card