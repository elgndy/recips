import React , { useEffect , useState} from 'react';
import Details from './recips';
 
const App = () => {
      
    const APP_ID = '50e0b1e4';
    const APP_KEY = 'cf074f8ba6b52c4a5beba3f87741e3b1';

    const [recips , setRecips] = useState([]);
    const [search , setSearch] = useState(''); 
    const [qury , setQury] = useState('chicken')
    useEffect( () => {
        getdata()
    } , [qury] )
    
    const getdata = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${qury}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        const data = await response.json();
        setRecips(data.hits);
        console.log(data.hits) 
    }

    const change = (e) => {
        setSearch(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQury(search);
    }

    return(
        <>
        <div className="App_ric">
            <form onSubmit={getSearch} className="search_form">
                <input onChange={change} type="text" className="search_bar" />
                <button className="search_button" type="submit">Search</button> 
            </form>
            <div className="pairant_items" >
            {recips.map((ris , index) => {
                return <Details 
                title={ris.recipe.label} 
                doc={ris.recipe.calories} 
                src={ris.recipe.image} 
                key={index}
                ingredients={ris.recipe.healthLabels}  />
            })}
            </div>
        </div>
        </>
    )
}
    
export default App;