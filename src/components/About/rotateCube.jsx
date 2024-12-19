import React from 'react'
import { iconsphere } from '../../utils/icons'

const RotateCube = () => {
    return (
        <div className="stage-cube-cont">
            <div className="cubespinner">
                {iconsphere.map((item, ind) => (
                    <div className={`face${ind + 1}`} key={ind}>
                        {React.createElement(item, { size: '4vw' })}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RotateCube