import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Ground from './Ground';
import Players from './Players';
import Player from './Player';
import Obstacles from './Obstacles';
import Obstacle from './Obstacle';
function StartApp(props)
{
return (<div>
<Ground>
<Players>
<Player name='irfan'/>
<Player name='cpy'/>
<Player name='ctop'/>
</Players>
<Obstacles>
<Obstacle name='stone'/>
<Obstacle name='bucket'/>
<Obstacle name='tinywall'/>
</Obstacles>
</Ground>
</div>);
}
ReactDOM.render(<StartApp/>,document.getElementById("streetrunner"));