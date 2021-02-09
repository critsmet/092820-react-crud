import React from 'react'

class ToyCard extends React.PureComponent{

  render(){
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img alt={"photo of " + this.props.name} src={this.props.image} className="toy-avatar"/>
        <p>{this.props.likes} Likes </p>
        <button className="like-btn">Like &lt;3</button>
      </div>
    )
  }

}

export default ToyCard
