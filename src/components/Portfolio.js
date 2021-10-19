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
            <Profile></Profile>
            <div className="content-container">
                <Naviguation></Naviguation>
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
