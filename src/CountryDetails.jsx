import React from 'react'


function CountryDetails(props) {
   
    return(
        <div className='mybox'>
            <h1>CountryDetails:{props.country?.name?.common}</h1>
            <img src={props.country?.flags[0]} style={{width:'100%'}} alt=""/>
        </div>
    )
}

export default CountryDetails