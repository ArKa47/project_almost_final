import * as React from 'react';
import '../../App.css';
import Logo from '../Img/Logo.png';
import Greenlogo from '../Img/Greenlogo.png'
import TextField from '@mui/material/TextField';
import BGL from '../Img/BGL.png';
import Fb from '../Img/Fb.png';
import Google from '../Img/Google.png'
import BGM5 from '../Img/BGM6.jpg';
import { Link } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
import { BrowserRouter as Router, Switch, 
    Route, Redirect,useHistory} from "react-router-dom";

function Reset() {
    const history = useHistory();
    const [open,setOpen] = React.useState(false)
    const [helper,setHelper] = React.useState(false)

    const handleClick= (e) => {
        e.preventDefault()
        const usr = document.getElementById('usr').value
        setOpen(true)
        
        //call API
        const ENDPOINT = "http://127.0.0.1:5000/send_email/"+usr
        fetch(ENDPOINT, {
          method: 'POST',
          mode: 'cors'
        })
          .then( response =>{
            if(response.ok){
              console.log("In OK fetch")
              return response.json()
            }
            throw response
          })
          .then(data =>{
            //console.log("DATA = ",data);
            //api_take=data //string
            if(data[0].status == "sucsess"){
                //alert(data[0].status)
                localStorage.setItem('username_forgetpsw', usr);
                history.push('/Index/ResetComplete/')
              }
            else{
                //alert(data[0].status)
                setOpen(false)
                setHelper(true)
            }
          })
          .catch(error => {
            console.error("Error Fetching data" , error);
          })
        //history.push("/Index/ResetError/")
    }

    return (

        <div>



            <Grid container>


                <Grid item xs={12} sm={12} md={6}>
                    <section class="showcase inbgset2">
                        <img src={BGM5} className="im" />
                        <div class="overlay"></div>
                        <div class="text">
                            <h2>Start trading </h2>
                            <h3>and enjoy new things.</h3>
                            <p>
                                Increase your income anywhere with our services.</p>

                        </div>
                    </section>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>



                    <div class="indexlogin-bg">

                        <div class="" >



                            <div >
                                <h3>Reset Password</h3><br />
                                <p className='font'>????????? Username ????????????????????????????????????
                        ??????????????????????????????????????????????????????????????????????????????</p>
                                <div style={{height:"50px"}}/>
                                <form onSubmit={handleClick}>
                                <TextField type={"text"} inputProps={{ pattern: "[A-Za-z???-???0-9]*" }} required disabled={open} error={helper} helperText={helper ? "??????????????? username":""} id="usr" label="Username" variant="standard" style={{ width: "90%" }} /><br /><br />

                                <div>
                                    <button type='submit' disabled={open} className="Btsignin linkx">
                                        Continue
                                    </button><br /><br />
                                </div>
                                </form>

                            </div>




                        </div>


                    </div>


                </Grid>
            </Grid>



        </div >
    );
}


export default Reset;