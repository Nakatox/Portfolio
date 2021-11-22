import React from 'react'
import {useState, useEffect} from 'react'
import Cardrepo from './Cardrepo';
import Naviguation from './Naviguation'
import Profile from './Profile'


function Portfolio() {
    const [data, setData] = useState([])
    const [playOnce,setPlayOnce] = useState(true)

    useEffect(()=>{
        if (playOnce){
            fetch('https://api.github.com/users/Nakatox/repos',{sort:'newest'})
            .then(response => response.json()
            .then((value)=>{
                setData(value)
                setPlayOnce(false)
            }))
        }
        
    },[data,playOnce])

    
    return (
        <div className="container">
            <div className="bloc-top">
                <div className="image-and-navi">
                    <div className="logo-container">
                        <img src="img/logo-black.png" alt="" className="logo-vincent"></img>
                    </div>
                </div>
                <Profile></Profile>
            </div>
            <Naviguation></Naviguation>
            <div className="content-container">
                <div className="card-container">
                    {data.map((e)=>
                        (
                            <Cardrepo repo = {e} key = {e.id}></Cardrepo>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
