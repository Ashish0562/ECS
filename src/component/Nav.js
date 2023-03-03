import React,{useState} from 'react';

const Nav = (props) => {

    const [count, setcount] = useState(1)

    function incr() {
        if (count <6) {
          setcount(count + 1)
          props.setinit(props.init + 3)
          props.setpage(props.page + 3)
        }
      }
    
      function decr() {
        if (count > 1) {
          setcount(count - 1)
          props.setpage(props.page - 3)
          props.setinit(props.init - 3)
        }
      }

  return (
     <div className='nav'>
        <button onClick={decr}>-</button>{count}<button onClick={incr}>+</button>
    </div>
  )
}

export default Nav