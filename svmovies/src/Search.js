import React,{useContext} from 'react'
import { AppContext } from './Context';

export default function Search() {
    const {query,setquery,isError} = useContext(AppContext);
  return ( 
    <section className='search-section'>
    <h2>Search Your Favourite Movie</h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}> 
    <div>
        <input type="text" placeholder='Search here' value={query} onChange={(e)=>setquery(e.target.value)}/>
    </div>
    </form>
    <div className="card-error">
        <p>{isError.show && isError.msg}</p>
    </div>

    </section>
  )
}
