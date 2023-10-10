const {useState, useEffect, useRef} = React;

// class StopWatch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       timePassedInMilliSeconds: 0
//     }

//     this.timer = null;

//     this.start = this.start.bind(this);
//     this.stop = this.stop.bind(this);
//     this.reset = this.reset.bind(this);
//   }

//   start() {
//     if (!this.timer) {
//       let startTime = Date.now();
//       this.timer = setInterval(() => {
//         const stopTime = Date.now();
//         const timePassedInMilliSeconds = stopTime - startTime + this.state.timePassedInMilliSeconds;

//         this.setState({
//           timePassedInMilliSeconds,
//         });
        
//         startTime = stopTime;
//       }, 250); // Executed every 250 millisecond
//     }

//     // alternate method, harder to understand
//     // if (!this.timer) {
//     //   let startTime = Date.now() - this.state.timePassedInMilliSeconds;
//     //   this.timer = setInterval(() => {
//     //     this.setState({
//     //       timePassedInMilliSeconds: Date.now() - startTime
//     //     });
//     //   }, 250); // Executed every 250 millisecond
//     // }
//   }

//   stop() {
//     window.clearInterval(this.timer);
//     this.timer = null;
//   }

//   reset() {
//     this.stop();
//     this.setState({
//       timePassedInMilliSeconds: 0
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
//           {Math.floor(this.state.timePassedInMilliSeconds / 1000)} s
//         </h2>
//         <div className="d-flex justify-content-center">
//           <button className="btn btn-outline-primary mr-2" onClick={this.start}>
//             start
//           </button>
//           <button className="btn btn-outline-danger mr-2" onClick={this.stop}>
//             stop
//           </button>
//           <button className="btn btn-outline-warning" onClick={this.reset}>
//             reset
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

const StopWatch = () => {
  const [timePassedInMilliSeconds, setTimePassed] = useState(0);
  
  const timer = useRef(null);
  
  const start = () => {
    if (!timer.current) {
      let startTime = Date.now();
      timer.current = setInterval(() => {
        console.log("timePassedInMilliSeconds:",timePassedInMilliSeconds);
        const stopTime = Date.now();
        setTimePassed(timePassedInMilliSeconds => stopTime - startTime + timePassedInMilliSeconds);
        
        startTime = stopTime;
      }, 1000); // Executed every 250 millisecond
    }
  };
  
  const stop = () => {
    console.log('stop',timer.current)
    window.clearInterval(timer.current);
    timer.current = null;
  };
  
  const reset = () => {
    stop();
    setTimePassed(0);
  };

  return (
    <div>
      <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
        {Math.floor(timePassedInMilliSeconds / 1000)} s
      </h2>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary mr-2" onClick={start}>
          start
        </button>
        <button className="btn btn-outline-danger mr-2" onClick={stop}>
          stop
        </button>
        <button className="btn btn-outline-warning" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);