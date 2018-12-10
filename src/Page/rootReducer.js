import {combineReducers} from "redux"
import home from './Home/reducer'
import detailMovie from './Detail/reducer'
import favorite from './Favorite/reducer'

export default combineReducers({
    home,
    detailMovie,
    favorite
})