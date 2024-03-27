import React,{Component} from "react"

class Counterclass extends Component{
    constructor(props){
        super(props)
        this.state={
            finalvalue:0
        }
    }
    handleincr = ()=>{
        this.setState((prevnum)=>({
            finalvalue: prevnum.finalvalue + 1
        }))
    }

    handledecr = ()=>{
       this.setState(prevnum=>({
        finalvalue: prevnum.finalvalue - 1
       }))
    }
    render(){
        const {finalvalue} = this.state
        return(
            <div>
                <h2>Counter App</h2>
                <p>Count: <span>{finalvalue}</span></p>
                <button onClick={this.handleincr}>Increment</button>
                <button onClick={this.handledecr}>Decrement</button>
            </div>
        )
    }
}
export default Counterclass