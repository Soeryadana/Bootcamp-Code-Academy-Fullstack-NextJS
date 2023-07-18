import * as ActionType from "../constant/regionConstant";

export const GetRegionRequest = () => ({
  type: ActionType.GET_REGION_REQUEST,
});

export const GetRegionSuccess = (payload: any) => ({
  type: ActionType.GET_REGION_SUCCESS,
  payload,
});

export const GetRegionFailed = (payload: any) => ({
  type: ActionType.GET_REGION_FAILED,
  payload,
});

export const GetIdRegionRequest = () => ({
  type: ActionType.GET_ID_REGION_REQUEST,
});

export const GetIdRegionSuccess = (payload: any) => ({
  type: ActionType.GET_ID_REGION_SUCCESS,
  payload,
});

export const GetIdRegionFailed = (payload: any) => ({
  type: ActionType.GET_ID_REGION_FAILED,
  payload,
});

export const AddRegionRequest = (payload: any) => ({
  type: ActionType.ADD_REGION_REQUEST,
  payload,
});

export const AddRegionSuccess = (payload: any) => ({
  type: ActionType.ADD_REGION_SUCCESS,
  payload,
});

export const AddRegionFailed = (payload: any) => ({
  type: ActionType.ADD_REGION_FAILED,
  payload,
});

export const UpdateRegionRequest = (id: any, payload: any) => ({
  type: ActionType.UPDATE_REGION_REQUEST,
  payload: {id, payload}
});

export const UpdateRegionSuccess = (payload: any) => ({
  type: ActionType.UPDATE_REGION_SUCCESS,
  payload,
});

export const UpdateRegionFailed = (payload: any) => ({
  type: ActionType.UPDATE_REGION_FAILED,
  payload,
});

export const DeleteRegionRequest = (id: any) => ({
    type: ActionType.DELETE_REGION_REQUEST,
    payload: id
})

export const DeleteRegionSuccess = () => ({
    type: ActionType.DELETE_REGION_SUCCESS,
})

export const DeleteRegionFailed = (error: any) => ({
    type: ActionType.DELETE_REGION_FAILED,
    payload: error
})