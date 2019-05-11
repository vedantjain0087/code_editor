import React from 'react'

const Loader = ({ hide_loader }) => {
    if (!hide_loader) {
        return (
            <div>
                <div className="lscontainer"></div>
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            </div>
        )
    }
    else {
        return (
            <div>
            </div>
        )
    }

}

export default Loader