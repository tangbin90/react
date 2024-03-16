import React from 'react'

// export default class Demo extends Component {

//     state = { count: 0 }
//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }

//     render() {
//         return (
//             <div>
//                 <h2>current sum: {this.state.count}</h2>
//                 <button onClick={this.add}>click add</button>
//             </div>
//         )
//     }
// 

function Demo() {
    console.log('Demo');
    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState('Tom')
    function add() {
        // this.setState(state => ({ count: state.count + 1 }))
        // setCount(count+1)
        // setCount((count) => {return count + 1})
        setCount(count => count + 1)
    }

    function changeName() {
        setName(name => "Jerry")
    }
    return (
        <div>
            <h2>current sum: {count}</h2>
            <h2>My Name is: {name} </h2>
            <button onClick={add}>click add</button>
            <button onClick={changeName}>Click me to change name</button>
        </div>
    )
}

export default Demo