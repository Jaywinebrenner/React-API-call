import React from 'react';


class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {

    fetch('http://www.omdbapi.com/?apikey=d54828b2&t=the thing')
    .then(res => res.json())
    .then(json => {
      this.setState({
        items: json,
        isLoaded: true,
      })
    }).catch((err) => {
      console.log(err);
    });

  }

  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded)
    return <div>Loading...</div>;

      return (
        <div className="App">
          <form>
            <label>
              <input placeholder='Movie Search' type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <br></br>
              {items.Title}
          <br></br>
          {items.Director}
          <br></br>
          {items.Year}
          <br></br>
          {items.Rated}
        </div>
      );

    }

  }

  export default App;
