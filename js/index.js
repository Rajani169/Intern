class Add extends React.Component{
constructor(props){
  super(props);
  this.state={
    input: "",
      phone: "",
    listNames: [],
    listPhones: [],
  };
  this.handleChange2= this.handleChange2.bind(this);
  this.handleChange1= this.handleChange1.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleSubmit =this.handleSubmit.bind(this);
}
  handleChange1 (event) {
    this.setState({
    input: event.target.value
    });
  }
  
  handleChange2 (event) {
    this.setState({
      phone: event.target.value
    });
  }
  
  handleDelete(deleted) {
  var newItems1= this.state.listNames.filter((item) =>
       {return item!= deleted;  
  });
  var newItems2= this.state.listPhones.filter((item) =>
       {return item!= deleted ; 
  });
  this.setState({
    listNames: newItems1,
    listPhones: newItems2
  });
  }

  handleSubmit(event){
    event.preventDefault();
    var input = this.state.input;
    var phone = this.state.phone;
    var newItems1 = this.state.listNames.concat(input);
    var newItems2 = this.state.listPhones.concat(phone);
    this.setState({
      input:"",
      phone:"",
      listNames: newItems1,
      listPhones: newItems2
    });
  } 
  render() {
   const Names = this.state.listNames.map(item =>
      <li> {item}
      <a href="#" onClick = {this.handleDelete.bind(this, item)} className = "btn btn-danger">Delete</a>
      </li>
    ); 
    
  const Phones = this.state.listPhones.map(item =>
      <li>{item} <a href="#" onClick = {this.handleDelete.bind(this, item)} className = "btn btn-danger">Delete</a></li>
    ); 
return(
      <div>
    <div>
           <form onSubmit ={this.handleSubmit}>
       Name:<br/><input  value={this.state.input} id="input" onChange = {this.handleChange1} placeholder="Enter Your Name Here"/><br />
      Phone Number:<br/><input  value={this.state.phone} id="phone" onChange={this.handleChange2} placeholder="Enter Your Phone Number Here"/>
        <p>Subscriber to be added</p>
    <div>
          Name: {this.state.input}
          Phone Number:{this.state.phone}
            </div>
    <button type="submit" title="Add New" id="add" className="btn btn-primary" >Add</button>
    </form>
      </div>
    <div className="view">
     <div className="names"> 
      <h2 id="name">Name</h2><hr />
    <ul>{Names}</ul>
    </div>
    <div className ="phones">
    <h2 id="phone">Phone Number</h2><hr />
    <ul>{Phones}</ul>
    </div>
<div class="delete">
     { this.state.listNames.forEach(i =><li> <button title="delete the subscriber" className="btn btn-danger" onClick={this.handleDelete.bind(this, i)}>Delete</button></li>
    ) }
    </div>
      </div>
         </div>
  );}
};



class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      display: true
    };
  this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    if(this.state.display==true){
      this.setState({
  display: false 
      })
    }
    else{
      this.setState({
      display: true
      })
    }
  }
  
 render() {
   if(this.state.display==true){
    return(
   <div>
      <button type="submit" title="Add New" id="add" className="btn btn-primary" onClick = {this.handleClick}>Add New</button>
      <div id="view">
      <h3 id="name">Name</h3>
      <h3 id="phone">Phone Number</h3>
      </div>
      </div>
    );
 }
  else{
    return (
    <Add />
      );
  }
  }
};

ReactDOM.render(<App />, document.getElementById("root"));