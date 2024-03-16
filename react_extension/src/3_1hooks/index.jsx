import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// export default class Demo extends Component {
//     state = { count: 0 }

//     myRef = React.createRef()
    
//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }

//     show = () => {
//         alert(this.myRef.current.value)
//     }

//     unmount = () => { 
//         window.myRoot.unmount()
//     }   
    
//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }
 
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000)
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h2>current sum: {this.state.count}</h2>
//                 <button onClick={this.add}>click add</button>
//                 <button onClick={this.unmount}>click unmount</button>
//                 <button onClick={this.show}>click show</button>

//             </div>
//         )
//     }

// }

function Demo() {
    console.log('Demo');
    const [count,setCount] = React.useState(0)
    const myRef = React.useRef()

    function unmount() { 
        //ReactDOM.unmountComponentAtNode(document.getElementById('root')) not support in React 18
        window.myRoot.unmount()
    }  

    function show() {
        alert('current input value: ' + myRef.current.value)
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        //willUnmount的钩子函数
        return () => {
            clearInterval(interval)
        }
    }, [])//[] means only run once, if not, it will run every time the component is updated. [count]检测count的变化，如果count变化了，就会重新执行useEffect

    function add() {
        // this.setState(state => ({ count: state.count + 1 }))
        // setCount(count+1)
        // setCount((count) => {return count + 1})
        setCount(count => count + 1)
    }


    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>current sum: {count}</h2>
            <button onClick={add}>click add</button>
            <button onClick={unmount}>click unmount</button>
            <button onClick={show}>click show</button>
        </div>
    )
}

export default Demo
