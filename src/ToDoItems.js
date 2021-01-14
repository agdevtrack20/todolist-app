import React, {Component} from "react";

class ToDoItems extends Component{

    constructor(props) {
        super(props);
        this.createTasks=this.createTasks.bind(this);
    }
    delete(key){
        return this.props.delete(key);
    }
    createTasks(entries){
        
            return (
                <li key ={entries.key} id="Items">
                {entries.text}  <i class="fas fa-trash"  onClick={ ()=> (this.delete(entries.key))} id="trashCan"></i> </li>
        );
    }

    

    render(){
        let entries= this.props.input ? this.props.input : {};
        console.log(entries);
        let listItems= entries.map(this.createTasks);
        return (
            <div >
                <ul className="litems">
                    {listItems}
                </ul>
            </div>
        );
    }
};
export default ToDoItems