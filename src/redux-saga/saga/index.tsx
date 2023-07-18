import {takeEvery,all} from 'redux-saga/effects'
import * as ActionRegion from '../constant/regionConstant'
import { handleAddRegion, handleDeleteRegion, handleGetRegion, handleUpdateRegion, handleGetIdRegion } from './regionSaga'
function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_REGION_REQUEST,handleGetRegion),
        takeEvery(ActionRegion.GET_REGION_REQUEST,handleGetIdRegion),
        takeEvery(ActionRegion.ADD_REGION_REQUEST,handleAddRegion),
        takeEvery(ActionRegion.UPDATE_REGION_REQUEST,handleUpdateRegion),
        takeEvery(ActionRegion.DELETE_REGION_REQUEST,handleDeleteRegion)
    ])
}

export default watchAll