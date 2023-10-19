import { Component } from "react";
import check from './done.png';

export class Planner extends Component{
state = {
    userInput: "",
    plannerList: []
    }

    onChangeEvent(e) {
this.setState({userInput: e})
    }

    addItem(input) {
        if(input=== ""){
            alert('Please enter your plans.')
        }
        else{
        let listArray= this.state.plannerList;
        listArray.push(input);
        this.setState({plannerList: listArray, userInput: ''});
    }
}
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
deleteItem(){
    let listArray = this.state.plannerList;
    listArray =[];
    this.setState({plannerList: listArray})
}
onFormSubmit(e) {
    e.preventDefault();
}
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                <input type="text"
                placeholder="What are your plans?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="add">ADD</button>
            </div>
            <ul>
                {this.state.plannerList.map((item, index) =>(
                <li onClick={this.crossedWord} key={index}>
                    <img src={check} width="40px"alt="check"/>
                    {item}</li>))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="delete">DELETE</button>
            </div>
                </form>
            
            </div>
            
        )
    }
}