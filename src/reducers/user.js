const user = (state = {
    loading:true,
    data:{
        avatar_url:'',
        loginname:'', 
        create_at:'', 
        score:'', 
        recent_topics:'', 
        recent_replies:''
    }
}, action) => {
    switch (action.type) {
        case "USER_UPDATE":
        return{
            loading:true,
            data:state.data
        }
        case "USER_UPDATE_SUCC":
        return{
            loading:false,
            data:action.data.data
        }
        case "USER_UPDATE_error":
        return{
            loading:false,
        }
        default:
            return state;
    }
}
export default user