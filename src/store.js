import { createStore, combineReducers, applyMiddleware } from 'redux'
const initstate = {
    username: 'tunglk'
}

const rootReducer = combineReducers({
    user: (state = initstate, action) => {
        console.log('In reducer: ', action)

        switch (action.type) {
            case 'Change_Username':
            return {
                username: action.payload
            }
        }
        return state
    },
    product: (state = {}, action) => state,
    order: combineReducers({
        user: (state = {}, action) => state,
        product: (state = {}, action) => state
    })
})

const middlewares= [
    store=>next=>action=>{
        prettyMiddleware(store, action, next)
    }
]

const prettyMiddleware = (store, action, next) => {
    console.log('in pretty', action)
        next(action)
        setTimeout(() =>{
            next({
                type:'Change_Username',
                payload:'time out'
            })
        },5e3)
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export default store