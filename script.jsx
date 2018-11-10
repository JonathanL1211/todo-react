class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){
    this.setState({
        word: event.target.value
    });
    console.log("change", event.target.value);
  }

  clickHandler(){
    const currentList = [...this.state.list];
    // console.log("currentlist is: ", currentList);
    currentList.push(this.state.word);
    //spread operator takes the elements of the whole array
    this.setState({
        list: currentList
    })
  }

  render() {
      // render the list with a map() here
      console.log("rendering");
      console.log("LIST: ", this.state.list);
      const mapTodoList = this.state.list.map((todo, index)=>(
        <li key={index}>{todo}</li>
      ))
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
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

