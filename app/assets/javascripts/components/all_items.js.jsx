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
   return (
     <div>
       <h1>All items component</h1>
        <h3></h3>
      </div>
    )
  }
}
