import React from 'react'
import { useColor,ColorPicker } from 'react-color-palette';
function Color() {
    const [color, setColor] = 
    useColor("hex", "#121214");
  return (
    <div className='p-4'>
            <h1>Color Picker</h1>
            <ColorPicker width={50} height={50}
                color={color}
                onChange={setColor} hideHSV dark />
        </div>
  )
}

export default Color