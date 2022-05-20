import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const ExampleLoader = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 2000)
    })

    return (
        <>{isLoading? <Loader/>:"Charge complete!" }
        </>
    )
}

export default ExampleLoader;