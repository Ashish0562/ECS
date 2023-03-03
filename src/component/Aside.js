import React from 'react'

const Aside = (prop) => {

    function handelbrand(e) {
        prop.setfilter({
          ...prop.filters,
          brand: e.target.checked ? e.target.value : '',
        });
        prop.setcheck(!prop.check)
        
      }
    
      function handelcategory(e) {
        prop.setfilter({
          ...prop.filters,
          category: e.target.checked ? e.target.value : '',
        });
        prop.setcheck(!prop.check)
      
      }

    return (
        <div className='aside'>
            <div>
                <h3>Filter by brand</h3>
                <div>
                    <input type='checkbox' value="Zebronics" onChange={handelbrand} />Zebronic
                </div>
                <div>
                    <input type='checkbox' value="Apple" onChange={handelbrand} />Apple
                </div>
                <div>
                    <input type='checkbox' value="HP" onChange={handelbrand} /> HP
                </div>
                <div>
                    <input type='checkbox' value="Dell" onChange={handelbrand} />Dell
                </div>
            </div>

            <div>
                <h3>Filter by category</h3>
                <div>
                    <input type='checkbox' value="Laptop" onChange={handelcategory} />
                    Laptop
                </div>
                <div>
                    <input type='checkbox' value="Mobile" onChange={handelcategory} />Mobile
                </div>
                <div>
                    <input type='checkbox' value="Head_Phones" onChange={handelcategory} /> Head Phones
                </div>
                <div>
                    <input type='checkbox' value="Speakers" onChange={handelcategory} /> Speaker
                </div>
                <div>
                    <input type='checkbox' value="Smart_TV" onChange={handelcategory} />Smart Tv
                </div>

            </div>

        </div>
    )
}

export default Aside