import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './component/Card';
import Header from './component/Header';
import Aside from './component/Aside';
import Nav from './component/Nav';



function App() {

  const [data, setdata] = useState([])
  const [page, setpage] = useState(3)
  const [init, setinit] = useState(0)
  const [check,setcheck]=useState(true)
  const [filter, setfilter] = useState({
    brand: '',
    category: '',
  });

  useEffect(() => {
    axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products')
      .then(res => setdata(res.data.data))
  }, [])

  // console.log(data);
  const products = data.filter((product) => {
    if (filter.brand && product.brand !== filter.brand) {
      return false;
    }
    if (filter.category && product.category !== filter.category) {
      return false;
    }
    return true;
  });


  return (
    <div className="App">
      <Header />
      <div className='flex'>
        <Aside setfilter={setfilter}  filter={filter} setcheck={setcheck} check={check}/>
        <div className='card-container'>
          {check?
            data.slice(init, page).map((e) => {
              return <Card key={e.id} value={e} />
            })
            :
            products.slice(init, page).map((e)=>{
              return <Card key={e.id} value={e} />
            })
          }
        </div>
      </div>
      <Nav setpage={setpage} page={page} init={init} setinit={setinit}/>
     
    </div>
  );
}

export default App;
