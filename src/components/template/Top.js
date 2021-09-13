import React from 'react'

function Top() { 
    const backToTop = () => {
        window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
        });
    }

    return (
        <button className="border rounded d-inline scroll-to-top" onClick={backToTop}>
            <i className="fas fa-angle-up" />
        </button>
    )
}

export default Top
