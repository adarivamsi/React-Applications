import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = props => {
    return (
        <>
            <h3>404 - Page Not Found</h3>
            <Link to="/">Back to Home</Link>
        </>
    )
}

export default PageNotFound