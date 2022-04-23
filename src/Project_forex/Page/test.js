import * as React from 'react';
import '../../App.css';
import {useState,useEffect} from 'react'



function Test() {

    const [button,setButton] = useState('ทดสอบการทำงาน');
    const [data, setData] = useState([]);
    
    function setup(){
        setButton('ทดสอบสำเร็จ')
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setData(data))

        console.log(data)
    
    }, [])

    return (

        <div>

            <h1>{button}</h1>
            <button type='submit' onClick={setup}>Test</button>
        </div>
    );

}

export default Test;