import React from 'react';


class App extends React.Component {
  render(){
    
    const {data} = this.props

    return (
      <div>
        <h1><img src="" alt="" /> {data.img} {data.name}</h1>
      </div>
    )
  }
}
export default App;