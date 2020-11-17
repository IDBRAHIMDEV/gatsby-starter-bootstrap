import React from 'react'
import Layout from './../components/Layout';

const about = () => {
    return (
        <Layout>
            <h1>About page</h1>
            <ul className="list-group">
                <li className="list-group-item">Learn ReactJS</li>
                <li className="list-group-item">Learn Javascript</li>
                <li className="list-group-item">Learn NodeJS</li>
            </ul>
        </Layout>
    )
}

export default about
