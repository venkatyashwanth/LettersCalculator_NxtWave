import { Component } from "react";
import "./index.css";

class LettersCalculator extends Component {
    state = {
        searcchInputVal: ''
    }
    handleInput = (event) => {
        this.setState({ searcchInputVal: event.target.value })
    }

    render() {
        const {searcchInputVal} = this.state; 
        return (
            <div className="appBg">
                <div className="app-content">
                    <div className="calc-input">
                        <h1 className="heading">Calculate the Letters you enter</h1>
                        <div className="input-content">
                            <p>Enter the phrase</p>
                            <input id="inputElement" type="text" placeholder="Enter the phrase" onChange={this.handleInput} value={searcchInputVal}/>
                        </div>
                        <div className="display-box">
                            <p>No.of letters: {searcchInputVal.length}</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png " alt="letters calculator" />
                    </div>
                </div>
            </div>
        )
    }
}

export default LettersCalculator;