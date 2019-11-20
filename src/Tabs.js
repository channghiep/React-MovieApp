import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

  

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

  return (
      
    <Paper className="">
      <Tabs

        centered
      >
        <Tab label="Movies" href="/"/>
        <Tab label="Search Results" href="/SearchMoviesContainers"/>
        <Tab label="TV Shows" href="/TvContainers" />

        
      </Tabs>
        
      
    </Paper>
    
    
  );
}