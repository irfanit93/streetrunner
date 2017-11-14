import React from 'react';
class Obstacle extends React.Component
{
constructor(props)
{
super(props);
this.state={topPos:props.topPos,leftPos:props.leftPos};
}
render()
{
let move={top:this.state.topPos,left:this.state.leftPos};
return (<div className="obstacle" style={move}>Obstacle Name: {this.props.name}</div>);
}
}
export default Obstacle;