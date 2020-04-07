import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from 'uuid/v4'

class BoxList extends Component{
    constructor(props){
        super(props);
        this.state = {
            boxes: []
        }
        this.renderBoxes = this.renderBoxes.bind(this);
        this.addBox = this.addBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }

    addBox(box){
        let newBox = {...box, id: uuid()};
        this.setState(st => {
            return {boxes: [...st.boxes, newBox]};
        })
    }

    deleteBox(box){
        this.setState(curSt => {
            return {boxes: curSt.boxes.filter(b => (b.id !== box.id))}
        })
    }

    renderBoxes(){
        return (
            <div>
                <h1>Box Maker!</h1>
                <NewBoxForm addBox={this.addBox}/>
                {this.state.boxes.map( box =>
                    <Box 
                        deleteBox={this.deleteBox} 
                        key={box.id} 
                        color={box.color} 
                        width={box.width} 
                        height={box.height} 
                        id={box.id}
                    />
                )}
            </div>
        )
    }

    render(){
        return(
            this.renderBoxes()
        )
    }
}

export default BoxList;