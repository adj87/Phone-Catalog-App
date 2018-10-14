import { combineReducers } from 'redux'
import { dataReducer } from './dataReducer'
import { phoneReducer } from './phoneReducer'

export default combineReducers({
  data: dataReducer,
  phone: phoneReducer
})
