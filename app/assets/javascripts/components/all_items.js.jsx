class AllItems extends React.Component {
  constructor(){
    super()

      this.state = {
        items: []
      };
  }

  componentDidMount() {
  $.getJSON(
    '/api/v1/items.json', (response) => {
      this.setState({ items: response })
    });
  }

render() {
  const itemsArray = this.state.items.map((key) => {
    return (
      <div key={key.id}>
        <h3>{key.name}</h3>
        <p>{key.description}</p>
      </div>
    )
  });
   return (
     <div>
       <h1>All items component</h1>
        <h3>{itemsArray}</h3>
      </div>
    )
  }
}
