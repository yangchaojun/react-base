import React, {useEffect} from 'react'

const Home = () => {
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/yangchaojun/json-static-service/users")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }) 

    return (
        <div>Home 页面</div>
    )
}

export default Home