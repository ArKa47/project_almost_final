import * as React from 'react';
import { Avatar, Container, Grid } from '@mui/material';
import '../App.css';
import { fontWeight, height, textAlign } from '@mui/system';
import BGM5 from '../Img/Forexbg.jpg';
import MSD1 from '../Img/Stock.png';
import MSD2 from '../Img/MSD2.jpg';
import MSD3 from '../Img/MSD3.jpg';
import Logo from '../Img/Logow.png';
import Greenlogo from '../Img/GreenW.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import Navebar from './Navebar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
//* Te 
import { useState, useEffect, useRef } from 'react';
import HistChart from '../component/histchart';
import { useParams } from 'react-router-dom';

//wraper function 
function forex_stream(obj, name, sett)
{
  if(obj.stream_debug == 'Popy')
  {
    return <h3> - </h3>
  }
  else{
    if(sett == 'BID')
    {
      try{
        if(obj.stream[name]["stream"][0] >= obj.stream[name]["previous"][0]){
          return <h4 style={{color:"green", display:"inline-block", marginLeft:"10px"}} >&nbsp;&nbsp;{obj.stream[name]["stream"][0]}</h4>
        }
        else{
          return <h4 style={{color:"red", display:"inline-block", marginLeft:"10px"}} >&nbsp;&nbsp;{obj.stream[name]["stream"][0]}</h4>
        }
        //return <h4 style="color:red" >&nbsp;&nbsp;{obj.stream[name][0]}</h4>
      }catch(e){
        console.log("stream error ", obj.stream[name])
        return <h4 style={{display:"inline-block", marginLeft:"10px"}}>Market close</h4>
      }
    }
    else //sett == 'ASK'
    {
      try{
        if(obj.stream[name]["stream"][1] >= obj.stream[name]["previous"][1]){
          return <h4 style={{color:"green", display:"inline-block", marginLeft:"10px"}} >&nbsp;&nbsp;{obj.stream[name]["stream"][1]}</h4>
        }
        else{
          return <h4 style={{color:"red", display:"inline-block", marginLeft:"10px"}} >&nbsp;&nbsp;{obj.stream[name]["stream"][1]}</h4>
        }
        //return <h4>&nbsp;&nbsp;{obj.stream[name][1]}</h4>
      }catch(e){
        return <h4 style={{display:"inline-block", marginLeft:"10px"}}>Market close</h4>
      }
    }
  }
}

function hist_gra_handle(obj, name, timeframe) // wrapper for showing charts to catch if there is no chart data had been fetch yet(witch it usually will) and we'll handle that by show loading text
{
    //console.log("grom hist gra hanlde = ",obj)//debug purpose
  try{
    //name = name+"_"+timeframe_
    return <HistChart forex_obj={obj[name]} name={name} timeframe={timeframe}/> /** this is for hist chart */
  }catch(e){
    return <p>Loading</p>
  }
}
//*




const values = {
    someDate: "2017-05-24"
};


const theme = createTheme({
    palette: {
        secondary: {
            main: '#11cb5f',
        },
    },
});




const ENDPOINT = "http://127.0.0.1:5000"; // declared what sever to bind socket aka my sever
const io = require('socket.io-client'); // declared socket that we aready install
let socket = io(ENDPOINT) //declered this variable to handle all the socket even aka bind it to the **const io = require('socket.io-client'); **
/////////////////////
function GPForex() {

    //te
    // well thank for the lib support (usePrams) i don't have to put a params in the function and cut of the complex pretty decenly a much thanK!
    let { forex_name } = useParams() //the name much be what you declared in route
    let ENDPOINT = "/Index/Zigzag/"+forex_name

    //useState and variable
    const [timeframe_, setTimeframe_] = useState("M5");
    const [hist, setHist] = useState(null); // useState vairable use to keep the value of the history
    const [stream, setStream] = useState({
        stream : null,
        stream_debug : "Popy"
        });// useState variable use to keep the forex bid/ask and previus bid/ask for the coulor things
    //

    useEffect(() => {
        console.log("in useEffect")
        //console.log("cahrt instance = ",chartRef.current)
        console.log("socket instance", socket);
        socket.on("connect", () => {
          //console.log("this is socket ID ",socket.id);
          console.log("EMIT??")
          //distribute_request()
          //distribute_request()
          //socket.emit('hist_request'); //debug purpose
          /*
          sleep(3000).then(() => {// * unfortunately it run once... I want it to loop run let change it!
            // Do something after the sleep!
            console.log("In use effect but wihe the 1 sec time out let's see what will run out!")
          });
          */
          //
        });
        socket.emit('forex_request_dynamic',forex_name);
        /*
        socket.on('hist_request_dynamic', (obj)=>{//well you gonna have like all the timeframe you need in one go  and we'll manage it later
            //console.log(" I recieve yuor dynamic thing ! ", obj);//debug purpose
            setHist(obj)
        })
        */
        socket.on('forex_request_dynamic', (obj)=>{//well you gonna have like all the timeframe you need in one go  and we'll manage it later
            //console.log(" I recieve yuor dynamic thing ! ", obj);//debug purpose
            setStream({
                ...stream,
                stream : obj,// set stream to copy obj
                stream_debug: 0
              })
            //console.log("I am on request dynamic!!",obj)
        })

        //mess with the time again
        /*
        const timer = setInterval(() => {
            //console.log('Timeout called!', timeframe_);
            //socket.emit('hist_request_dynamic', forex_name, timeframe_)
          }, 6000);
        return () => {
            clearInterval(timer)
        };
        */
        
        /*debug purpose
        socket.on('hist_request', (obj)=>{
        console.log(" I recieve yuor thing ! ", obj);
        })
        */
    }, []);

    useEffect(() => {
        // side effect here on change of any of props.x or stateY
        //console.log("socket instance another ", socket);
        //console.log("cahrt instance another = ",chartRef.current)

        //socket.emit('hist_request_dynamic', forex_name, timeframe_)

        const ENDPOINT = "http://127.0.0.1:5000/hist_forex_request/"+forex_name+"/"+timeframe_
        fetch(ENDPOINT)
          .then( response =>{
            if(response.ok){
              console.log("In OK fetch")
              return response.json()
            }
            throw response
          })
          .then(data =>{
            //console.log("DATA = ",data);
            setHist(data);
          })
          .catch(error => {
            console.error("Error Fetching data" , error);
          })
        //console.log("I am in useEffect onChange timeframe click = ",timeframe_)
    }, [timeframe_])
    //*

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const [currency, setCurrency] = React.useState('M5');

    const handleChange1 = (event) => {
        setCurrency(event.target.value);
    };

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));




    return (

        <div className='BGColor'>
            <Navebar />
            <div className='zin'>

                <section class="showcase5">

                
                    <div class="overlay"></div>
                    <div style={{ height: "2px" }} />
                    <div className="maincon-GPForex">
                        <div class="text textcom-forexai">


                            <Grid container>
                                <Grid item xs={12}>
                                    <h4 className='colorForex font' >{forex_name}</h4>
                                </Grid>

                            

                            </Grid>
                            <div style={{ height: "15px" }} />

                            <Paper elevation={5}>
                                <div className='BG-zigzag '>

                                    <Grid container style={{ position: "relative", top: "7px" }}>

                                        <div style={{ height: "40px" }} />
                                        <Grid item xs={6} sm={4} md={4} lg={4} style={{ textAlign: "center" }} >
                                            <h4 className='font-BidandAsk' >BID<span className='Colortext-Priceandmore'>{forex_stream(stream, forex_name, 'BID')}</span></h4>
                                        </Grid>
                                        <Grid item xs={6} sm={4} md={4} lg={4} style={{ textAlign: "center" }}>
                                            <h4 className='font-BidandAsk' >ASK<span className='Colortext-Priceandmore'>{forex_stream(stream, forex_name, 'ASK')}</span></h4>
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={4} lg={4}>
                                            <Link to={ENDPOINT} style={{ textDecoration: "none", position: "relative", top: "-7px" }}>
                                                <div className='position-buttuon'>
                                                    <Button variant="contained" style={{ width: "150px", height: "40px", marginRight: "30px" }}>ดูสถิติการกลับตัว</Button>
                                                </div>
                                            </Link>
                                        </Grid>

                                    </Grid>





                                </div>
                            </Paper>


                            <div style={{ height: "15px" }} />

                            <Paper elevation={5}>
                            <div className='BGFXC'  >
                                <div style={{ backgroundColor: "#fff" }}>


                                    <Paper>
                                        <ThemeProvider theme={theme}>

                                            <Box sx={{ bgcolor: 'background.paper' }}>
                                                <Tabs
                                                    value={value}
                                                    onChange={handleChange}
                                                    variant="scrollable"
                                                    indicatorColor="secondary"
                                                    textColor="secondary"
                                                    scrollButtons
                                                    allowScrollButtonsMobile
                                                    aria-label="scrollable force tabs example"
                                                    size='small'
                                                >
                                                    <Tab label="M1" onClick={()=>setTimeframe_("M1")}/>
                                                    <Tab label="M5" onClick={()=>setTimeframe_("M5")}/>
                                                    <Tab label="M15" onClick={()=>setTimeframe_("M15")}/>
                                                    <Tab label="M30" onClick={()=>setTimeframe_("M30")}/>
                                                    <Tab label="H1" onClick={()=>setTimeframe_("H1")}/>
                                                    <Tab label="H4" onClick={()=>setTimeframe_("H4")}/>
                                                    <Tab label="D1" onClick={()=>setTimeframe_("D1")}/>

                                                </Tabs>
                                            </Box>
                                        </ThemeProvider>
                                    </Paper>
                                </div>


                                <div style={{ height: "10px" }} />

                                <div>
                                    <div style={{ padding: "10px" }}>
                                        {hist_gra_handle(hist, forex_name, timeframe_)}
                                    </div>
                                </div>

                                <div style={{ height: "40px" }} />


                              

                            </div>



                            </Paper>

                        </div>

                    </div>
                    

                </section>

            </div>



        </div >

    );
}

export default GPForex;