import React from 'react';
class Player extends React.Component
{
constructor(props)
{
super(props);
this.state={topPos:props.topPos,leftPos:props.leftPos,height:props.height,width:props.width};
}
componentDidMount()
{
let i=0,wid=parseInt(this.state.width),hig=parseInt(this.state.height);
setInterval(()=>{
this.setState({leftPos:i+'%',height:hig+'px',width:wid+'px'});
i+=10;
hig-=3;
wid-=3;
console.log(hig+'px');
if(i>=90)
{
hig=parseInt(this.props.height);
wid=parseInt(this.props.width);
i=parseInt(this.props.leftPos);
}
},1000);
}
render()
{
let move={top:this.state.topPos,left:this.state.leftPos,background:'url(bgasync.png) 0% 0%/100% 100%',height:this.state.height,width:this.state.width};
return (<div className="player" style={move}>Player {this.props.name}</div>);
}
}
export default Player;