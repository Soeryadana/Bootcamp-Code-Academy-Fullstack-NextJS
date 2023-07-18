import * as ActionType from "../constant/regionConstant";

const INIT_STATE = {
  regions: [],
};

const RegionReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_REGION_REQUEST:
    case ActionType.GET_ID_REGION_REQUEST:
    case ActionType.ADD_REGION_REQUEST:
    case ActionType.UPDATE_REGION_REQUEST:
    case ActionType.DELETE_REGION_REQUEST:
      return { ...state };
    case ActionType.GET_REGION_SUCCESS:
      return GetRegion(state, action);
    case ActionType.GET_ID_REGION_SUCCESS:
      return GetIdRegion(state, action);
    case ActionType.ADD_REGION_SUCCESS:
      return AddRegion(state, action);
    case ActionType.UPDATE_REGION_SUCCESS:
      return UpdateRegion(state, action);
    case ActionType.DELETE_REGION_SUCCESS:
      return DeleteRegion(state, action);
    default:
      return { ...state };
  }
};

const GetRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const GetIdRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const AddRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

const UpdateRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

const DeleteRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

export default RegionReducer;
