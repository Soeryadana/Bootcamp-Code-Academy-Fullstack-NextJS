import axios from "axios";
import config from "@/config/config";

const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/regions`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const GetIdData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/regions/${id}`);
    console.log("ini adalah data dari get id: ", result)
    return result.data;
  } catch (error) {
    return error;
  }
};

const DeleteData = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/regions/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const CreateData = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/regions/upload`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const UpdateData = async (id: any, payload: any) => {
  try {
    // const result = await axios.put(`${config.domain}/region/${updatedRegion.region_id}`, updatedRegion.region_name);
    const result = await axios.put(`${config.domain}/regions/${id}`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

export default {
  GetData,
  GetIdData,
  DeleteData,
  CreateData,
  UpdateData,
};
