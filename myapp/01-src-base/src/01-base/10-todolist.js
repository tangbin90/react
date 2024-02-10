import React from 'react'
import './css/01-index.css'

export default class App extends React.Component {
  constructor(){
    super()
    this.myref = React.createRef()
    this.state = {
        list:[{
            id:1,
            mytext:"aaa"
        }]
    }
  }

  render() {
    var newlist = this.state.list.map((item, index) => 
        <li key={item.id}>
            <span dangerouslySetInnerHTML={
                {
                    __html:item.mytext
                }
            }></span>
            <button onClick={() => this.handdleDel(index)}>Del</button>
            </li>
    )
    return (
      <div>
        <input ref={this.myref}/>
        <button onClick={this.handleClick2}> add1</button>
        <br/>
        <ul>
            {newlist}
        </ul>
        {/*this.state.list.length===0? <div>No Todo List</div> : null*/}

        {/*this.state.list.length===0 && <div>No Todo List</div>*/}
        <div className={this.state.list.length===0?'':'hidden'}>no todo list </div>
        </div>
    )
  }
 
  handleClick2 = ()=>{
    console.log(this.myref.current.value)
    let newlist = [...this.state.list]
    newlist.push({
        id:Math.random()*100000000,
        mytext:this.myref.current.value})

    this.setState({
        list:newlist
    })

    this.myref.current.value = ""
    }

    handdleDel(index){
        console.log(index)
        let newList = this.state.list.slice()
        newList.splice(index,1)
        this.setState({
            list:newList
        })

    }

}


//ref引用的写法，可以从另一个组件中引用当前组件，并得到value