import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import DraggableColorBox from './DraggableColorBox';

function DraggableColorList({colors, removeColor}){
    return(
        <div style={{height: '100%'}}>
            {colors.map((color, i) => (
                <DraggableColorBox 
                    index={i}
                    key={color.name} 
                    color={color.color} 
                    name={color.name} 
                    handleDelete={() => removeColor(color.name)}
                />
            ))}
        </div>
    );
}

export default SortableContainer(DraggableColorList);