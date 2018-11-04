import React from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';
import ColorPanel from './ColorPanel';
import SidePanel from './SidePanel';
import Messages from './Messages';
import MetaPanel from './MetaPanel';


const App = () => (
  <Grid columns="equal" className="app" style={{background: "#eee"}}>
    <ColorPanel />
    <SidePanel />
    <Grid.Column>
      <Messages />
    </Grid.Column>
    <Grid.Column>
      <MetaPanel />
    </Grid.Column>
  </Grid>
)

export default App;
