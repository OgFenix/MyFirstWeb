import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles'
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import {Typography} from '@material-ui/core'
import './App.css';
// this is the grid imports from material's libary (basicly getting icons instead of using link)
// if you roche another icons then go ceck materia-io.com and look for icons there threw google and shit
// nice libary they have (theres a handicap icon for me cuz y not)
import AccessibleIcon from '@material-ui/icons/Accessible';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ComputerIcon from '@material-ui/icons/Computer';
import RedditIcon from '@material-ui/icons/Reddit';
const theme = createMuiTheme({
  palatte : {
    primary : {
      main: "#c7d8ed"
    },
    secondary:{
      main : "#c7d8ed"
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4:{
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5:{
      fontWeight:100,
      lineHeight:'2rem'
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       
       <NavBar/>
       <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             All star - Smash Mouth
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          Somebody once told me the world is gonna roll me
I ain't the sharpest tool in the shed
She was looking kind of dumb with her finger and her thumb
In the shape of an "L" on her forehead
          </Typography>
        </div>
       <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<AccessibleIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="9gag" btnTitle="Go to link" />
          <Grid icon={<AirlineSeatIndividualSuiteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Bali" btnTitle="Go to link"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Stonks" btnTitle="Go to link"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<LinkedInIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Hire me" btnTitle="Go to link"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Dlt cmp" btnTitle="Go to link"/>
          <Grid icon={<RedditIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Simp" btnTitle="Go to link"/>
        </div>
        <div className={classes.bigSpace}>
        <Typography variant="h5" className={classes.littleSpace} color="primary">
          hey sub to me pls and follow on all platforms this is kinda cool tbh
          </Typography>
          <h1></h1>
          <Footer/>
        </div>
      </ThemeProvider>
      

    </div>
  );
}

export default App;
