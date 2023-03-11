import React from 'react';

export default class Timer extends React.Component {

    state = {
        calculate:0,
        isCounting:false
    }

    componentDidMount() {
        const userCount = localStorage.getItem('count');
        if (userCount) this.setState({ calculate: +userCount });
    }
    
    componentDidUpdate() {
        localStorage.setItem('count', this.state.calculate);
    }

    componentWillUnmount() {
        clearInterval(this.counterId);
        this.handlerStop();
    }

    handlerStart = () => {
        clearInterval(this.counterId );

        this.setState({isCounting:!this.state.isCounting});

        this.counterId =  setInterval(() => {
            this.setState({calculate: this.state.calculate + 1})
        }, 1000);
    }

    handlerStop = () => {
        this.setState({isCounting:!this.state.isCounting});
        clearInterval(this.counterId )
    }

    handlerReset = () => {
        clearInterval(this.counterId )
        this.setState({calculate: 0})
    }

    render() {
        return (
            <div className="Timer">
                <h1>React Timer</h1>
                { this.state.isCounting? (
                    <button onClick={ this.handlerStop } >Stop</button>
                ):(
                    <button onClick={ this.handlerStart } >Start</button>
                )}
                <p>{ this.state.calculate }</p>
                <button onClick={ this.handlerReset } >Reset</button>
            </div>
        );
    }
}