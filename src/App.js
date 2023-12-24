import React, { Fragment } from 'react';
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import  Home  from './Components/Home/Home';
import Destinations from './Components/Destinations/Destinations';
import Search from './Components/Search/Search';
import Selectes from './Components/Selectes/Selectes';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
const App=()=>{
return(
    <div>
<Navbar/>
<Home/>
<Destinations/>
<Search/>   
<Selectes/>
<Carousel/>
<Footer/>

</div>
)


}
export  default App