import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

function CardInfra() {

    function mydata(val){
        return (
            <Cards imgSrc= {val.imgSrc} 
            title={val.title} 
            sname={val.sname} 
            link={val.link}
            />
        )
    }

    return(
        <>
        <h1 className="heading_style">Top list of Netflix Series</h1>
        {/* <Cards imgSrc= {Sdata[0].imgSrc} 
            title={Sdata[0].title} 
            sname={Sdata[0].sname} 
            link={Sdata[0].link}
            />
            <Cards imgSrc= {Sdata[1].imgSrc} 
            title={Sdata[1].title} 
            sname={Sdata[1].sname} 
            link={Sdata[1].link}
            />
            <Cards imgSrc= {Sdata[2].imgSrc} 
            title={Sdata[2].title} 
            sname={Sdata[2].sname} 
            link={Sdata[2].link}
            />
        */}
        {Sdata.map(mydata)}
        </>
    )
} export default CardInfra;