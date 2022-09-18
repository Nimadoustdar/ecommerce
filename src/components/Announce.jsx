import { Close } from '@material-ui/icons'
import React, { useState } from 'react'

const Announce = () => {

    const [anounceStyle, setAnounceStyle] = useState('bg-[#8141f3] font-bold text-white flex items-center justify-center')

    const handleClose = () => {
        setAnounceStyle(anounceStyle + " hidden")
    }

    return (
        <div 
        className={anounceStyle}
        >
            <h2> Hurry up its`s 40% off now</h2>
            <Close 
            className='cursor-pointer' 
            onClick={handleClose} 
            />
        </div>
    )
}

export default Announce