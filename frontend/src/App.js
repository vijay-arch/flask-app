import React, {useEffect, useState} from 'react';

function App() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        fetch('/api/')
        .then(res => res.json())
        .then(data => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1> 3 Tier Kubernetes Project</h1>
            <h2> {message}</h2>
        </div>
    )
}

export default App;