import React, { Component } from 'react'  

import Button from 'react-bootstrap/Button' 
import 'bootstrap/dist/css/bootstrap.min.css';




export class Form extends Component {


    render() {
        return (
            <div>
                   <form>
                <label> Number one </label>
               <input type="number"   value={this.props.state.Num1} onChange={this.props.handelChangeNumOne}/> 
               
                <br /> 

                <div className='calc-c' >

                <Button variant="primary"  onClick={this.props.Incresre} > +   </Button>  {' '}  
                <Button variant="primary"  onClick={this.props.Decrese} > -   </Button>  {' '} 
                <Button variant="primary"  onClick={this.props.Multiplication }> * </Button>  {' '} 
                <Button variant="primary"  onClick={this.props.Division } >/  </Button>  {' '} 
                <Button variant="primary"  onClick={this.props.Diacritic } > ^ </Button>  {' '} 


                </div>


                <br /> 

               <label> Number two </label>
               <input type="number"   value={this.props.state.Num2}onChange={this.props.handelChangeNumTwo}  />
            
               </form>
            </div>
        ) 
    }
}

export default Form ;
