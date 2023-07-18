import { call, put } from "redux-saga/effects";
import region from "@/pages/api/region";
import {
  GetRegionFailed,
  GetRegionSuccess,
  GetIdRegionFailed,
  GetIdRegionSuccess,
  AddRegionSuccess,
  AddRegionFailed,
  UpdateRegionSuccess,
  UpdateRegionFailed,
  DeleteRegionSuccess,
  DeleteRegionFailed,
} from "../action/regionAction";

function* handleGetRegion(): any {
  try {
    const result = yield call(region.GetData);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFailed(error));
  }
}

function* handleGetIdRegion(action: any): any {
  try {
    const id  = action.payload;
    const result = yield call(region.GetIdData, id);
    yield put(GetIdRegionSuccess(result));
  } catch (error) {
    yield put(GetIdRegionFailed(error));
  }
}

function* handleAddRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(region.CreateData, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}

function* handleUpdateRegion(action: any): any {
  const { id, payload } = action.payload;
  try {
    const result = yield call(region.UpdateData, id, payload);
    yield put(UpdateRegionSuccess(result.data));
  } catch (error) {
    yield put(UpdateRegionFailed(error));
  }
}

function* handleDeleteRegion(action: any): any {
  try {
    const id = action.payload;
    const result = yield call(region.DeleteData, id);
    yield put(DeleteRegionSuccess());
  } catch (error) {
    yield put(DeleteRegionFailed(error));
  }
}

export {
  handleGetRegion,
  handleGetIdRegion,
  handleAddRegion,
  handleUpdateRegion,
  handleDeleteRegion,
};
