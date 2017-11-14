import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Ground from './Ground';
import Players from './Players';
import Player from './Player';
import Obstacles from './Obstacles';
import Obstacle from './Obstacle';
class StartApp extends React.Component
{
render()
{
return (<div>
<Ground>
<Players>
<Player name='irfan' topPos="0%" leftPos="0%" height="50px" width="100px"/>
<Player name='cpy' topPos="40%" leftPos="10%" height="50px" width="100px"/>
<Player name='ctop' topPos="80%" leftPos="20%" height="50px" width="100px"/>
</Players>
<Obstacles>
<Obstacle name='stone' topPos="0%" leftPos="0%"/>
<Obstacle name='bucket' topPos="20%" leftPos="0%"/>
<Obstacle name='tinywall' topPos="40%" leftPos="0%"/>
</Obstacles>
</Ground>
</div>);
}
}
ReactDOM.render(<StartApp/>,document.getElementById("streetrunner"));