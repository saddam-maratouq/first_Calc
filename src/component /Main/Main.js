import React, { Component } from 'react' 
import Form from '../form/Form'



import './Main.styles.css'

 class Main extends Component { 



    constructor(props) {
        super(props)
    
        this.state = {
             Num1 : '',

             Num2 :  '', 

           total : ' '
        }
    }  

    handelChangeNumOne = (e) => { 

        
        this.setState({
            Num1 : e.target.value 
        })
    }
    

    handelChangeNumTwo = (e) => {

        
        this.setState({
            
            Num2 : e.target.value 
        })
    }

    //

   
    Incresre = (e) => {
        e.preventDefault()

      
        this.setState({
            total :  Number(this.state.Num1) + Number(this.state.Num2),
            Num1 : '',
            Num2 :  '', 

        })
    }
    

    Decrese = (e) => {

        e.preventDefault()
        this.setState({
            total :   Number(this.state.Num1) - Number(this.state.Num2) ,
            Num1 : '',
            Num2 :  '', 
        })
    }
    

    Multiplication  = (e) => {

        e.preventDefault()
        this.setState({
            total :   Number(this.state.Num1) * Number(this.state.Num2) ,
            Num1 : '',
            Num2 :  '', 
        })
    }
    

    Division   = (e) => {

        e.preventDefault()
        this.setState({
            total :   Number(this.state.Num1) / Number(this.state.Num2) ,
            Num1 : '',
            Num2 :  '', 
        })
    }

    
    render() { 


        return (
            <div> 
                    <Form
                    state={this.state}
                    handelChangeNumOne={this.handelChangeNumOne} 
                    handelChangeNumTwo={this.handelChangeNumTwo}
                    Division={this.Division} 
                    Multiplication={this.Multiplication} 
                    Decrese={this.Decrese}
                    Incresre={this.Incresre}
                    />
               
                <br /> 
                <br /> 
                
                <h1>  {this.state.total }</h1> 

                
            </div>
        )
    }
}

export default Main
