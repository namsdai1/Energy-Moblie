import { store, shop } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/action-types";

export const fetchStatistical = () => async (dispatch) => {
  const response = await store.get("/bill/month");
  dispatch({
    type: ActionTypes.FETCH_STATISTICAL,
    payload: response.data.data,
  });
  console.log("RESS_STATIS >>> ", response.data.data);
};
