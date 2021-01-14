import React, {Component} from "react";
import ToDoItems from "./ToDoItems";

class ToDoList2 extends Component {
    constructor(props){
        super(props);

        this.state= {
            items:[]
        };
        this.addItem=this.addItem.bind(this);
        this.deleteItem= this.deleteItem.bind(this);
    }
    addItem(e) {
       // console.log(e.target[0].value);
        //console.log(this._inputElement.value);
        if (this._inputElement.value !== ""){
            var newItem ={
                text: this._inputElement.value,
                key: Date.now()
            }

            this.state.items.push(newItem);
            this.setState({});

            /*this.setState((preState) => {
                return (
                    items=preState.items.concat(newItem)
                );
            }
            );*/

            this._inputElement.value="";
        }
        console.log(this.state.items);
        e.preventDefault();

    }

    deleteItem(key){
        var filteredItems =this.state.items.filter((item)=> {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });

    }

    render() {

        return (
            
            <div>
                <form className="frm" onSubmit={this.addItem} >
                    <textarea ref={(a)=>this._inputElement=a} placeholder="Add tasks ">
                    </textarea>
                    <button className="addbtn" type="submit"><b>+</b></button>
                </form>
                <ToDoItems input={this.state.items} delete={this.deleteItem}></ToDoItems>
            </div>
        )
    }
}

/*class ToDoList extends Component{ 
    render() {
        
        return (
        <h6>My First to do list</h6>
        );
    }

}*/

export default ToDoList2
