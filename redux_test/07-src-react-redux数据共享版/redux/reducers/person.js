import { ADD_PERSON } from "../constant";

//初始化人的列表
const initState = [{id:'001',name:'tom',age:18}]
function personReducer(preState=initState,action){
    console.log('PersionReducer:',initState)
    const {type,data} = action
    switch (type) {
        case ADD_PERSON://添加一个人
            return [data,...preState]
        default:
            return preState  
    }
}

export default personReducer