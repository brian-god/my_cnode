const list = (state={
    loading: true,
    data:[]
},action) =>{
    switch(action.type){
        case 'LIST_UPDATA_SUCC': 
        return {
            loading: false,
            data: action.data.data
        }
        case 'LIST_UPDATA_REEOR':
        return{
            loading:false,
            data:[]
        }
        case 'LIST_UPDATA':
        return{
            loading:true
        }
        default:
            return state;
    }
}
export default list