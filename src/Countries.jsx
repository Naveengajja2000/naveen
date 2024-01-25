import React from "react";
import axios from 'axios';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";
function Countries() {
    var [countries,setCountries] = React.useState([])
    var[loader,setLoader] = React.useState(true)
    var [selectedCountry,setSelectedCountry] = React.useState({})

    React.useEffect(()=>{


        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setCountries(res.data)
            setLoader(false)
        }).catch(()=>{})
    },[])

    return (
        <div className='mybox'>
            <h3>Countries</h3>
            {loader && <h2>Loading...</h2>}
            <div style={{display:'flex',flexWrap:'wrap'}}>
            <ul style={{width:'50%'}}>
                {
                    countries.map((c)=>{
                        return <li onClick={()=>{setSelectedCountry({...c})}}>{c.name.common}</li>        
                    })
                }
            </ul>
            <div style={{width:'40%'}}>
                <CountryDetails country={selectedCountry}></CountryDetails>
            </div>
        </div>
</div>
    )
}

export default Countries