import './Form.css'
import React, { useState, useEffect } from 'react';


function Form(){
    const [val,setVal]=useState({
            creator:'',
            year:'',
            place:'',
            prota:'',
            journal:'',
            author:''
    })
    

    return(
        <div className='container'>
            <h2>How much do you know about Gravity Falls?</h2>
            <form>
    
                <label>Who wrote Gravity Falls?</label>
                <input type="radio" name="creator"/> Dana Terrace
                <input type="radio" name="creator"/> Alex Hirsch
                <input type="radio" name="creator"/> Matt Braly
                <input type="radio" name="creator"/> Rebecca Sugar
    
                <label>When did the show air?</label>
                <input type="radio" name="year"/> 2013
                <input type="radio" name="year"/> 2011
                <input type="radio" name="year"/> 2014
                <input type="radio" name="year"/> 2012
    
                <label>Where does Gravity Falls happen?</label>
                <input type="radio" name="place"/> Oregon
                <input type="radio" name="place"/> Idaho
                <input type="radio" name="place"/> New Jersey
                <input type="radio" name="place"/> California
    
                <label>Who are the main characters?</label>
                <input type="radio" name="prota"/> Dipper and Mabel
                <input type="radio" name="prota"/> Mason and Mabel
                <input type="radio" name="prota"/> Stan Pines
                <input type="radio" name="prota"/> Soos Ramirez
    
                <label>How many journals are there?</label>
                <input type="radio" name="journal"/> 2
                <input type="radio" name="journal"/> 4
                <input type="radio" name="journal"/> 3
                <input type="radio" name="journal"/> 5
    
                <label>Who is the author of the journals?</label>
                <input type="radio" name="author"/> Stanley Pines
                <input type="radio" name="author"/> Stanford Pines
                <input type="radio" name="author"/> Fiddleford Hadron McGucket
    
    
            </form>
        </div>
    )
}



export default Form;