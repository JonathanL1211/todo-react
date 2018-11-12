class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
    this.deleteHandler = this.deleteHandler.bind( this );
  }

  state = {
    list : [],
    word : "",
    error : ""
  }

  changeHandler(event){
    this.setState({
        word: event.target.value
    });
    console.log("change", event.target.value);
  }

  clickHandler(){
    if (this.state.word.length < 6){
        this.setState({
            error: "Length of todo is too short, make it more"
        })
    }
    else {
        const currentList = [...this.state.list];
        // console.log("currentlist is: ", currentList);
        currentList.push(this.state.word);
        //spread operator takes the elements of the whole array
        this.setState({
            error: "",
            list: currentList
        })
    }
  }

  deleteHandler(index){
    let currentList = this.state.list;
    //this is to remove the element you want to remove
    currentList.splice(index, 1)
    this.setState({
        list: currentList
    })
  }

  render() {
      // render the list with a map() here
      console.log("rendering");
      console.log("LIST: ", this.state.list);
      const mapTodoList = this.state.list.map((todo, index)=>{
        return (
            <div>
                <li key={index}>{todo}</li>
                <button onClick={()=>this.deleteHandler(index)}>Delete</button>
            </div>
        )
      })
      return (
        <div className="list">
          <h3>To-Do-List</h3>
          <input onChange={this.changeHandler} value={this.state.word}/>
          <br/>
          <button onClick={this.clickHandler}>add item</button>
          <br/>
          <h6>List item is here:</h6>
          <ol>
            {mapTodoList}
          </ol>
          <br/>
          <p>{this.state.error}</p>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

