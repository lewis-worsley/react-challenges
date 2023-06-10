import React from 'react'
import css from './css/Sidebar.module.css'

// const Sidebar = () => {
    
//     return <div>
//         <a>My Photos</a>
//         <a>My Illustrations</a>
//         <a>My Paintings</a>
//         </div>
// }

function Sidebar() {
    return (
        <div className={css.sidebar}>
            <a href = "#." target= "_blank">My Photos</a>
            <a href = "#." target= "_blank">My Illustrations</a>
            <a href = "#." target= "_blank">My Paintings</a>
        </div>
    )
}

export default Sidebar