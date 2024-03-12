import { ADD_PERSON } from "../constant";

//初始化人的列表
const initState = [{id:'001',name:'tom',age:18}]
function personReducer(preState=initState,action){
    console.log('PersionReducer:',initState)
    const {type,data} = action
    switch (type) {
        case ADD_PERSON://添加一个人
        //此处不可以写成preState.unshift(data),因为unshift会改变原数组，ui不会render因为浅对比无差异。而redux要求reducer不能改变原数组
            // preState.unshift(data);
            // console.log('PersionReducer:',preState);
            return [data, ...preState]
        default:
            return preState  
    }
}

export default personReducer