import {
  KNOWLEDGE_FETCHING,
  KNOWLEDGE_SUCCESS,
  KNOWLEDGE_FAILED,
  KNOWLEDGE_BY_ID_SUCCESS,
  KNOWLEDGE_URL,
  server,
  apiUrl,
} from "../../constants";
import { httpClient } from "../../utils/Api";

export const setKnowledgeFetchingToState = () => ({
  type: KNOWLEDGE_FETCHING,
});

export const setKnowledgeSuccessToState = (payload) => ({
  type: KNOWLEDGE_SUCCESS,
  payload,
});

export const setKnowledgeFailedToState = (payload) => ({
  type: KNOWLEDGE_FAILED,
  payload,
});

const setStateToByIdSuccess = (payload) => ({
  type: KNOWLEDGE_BY_ID_SUCCESS,
  payload,
});

export const loadKnowledges = () => {
  return async (dispatch) => {
    dispatch(setKnowledgeFetchingToState());
    await doLoadKnowledges(dispatch);
  };
};

export const loadTopListKnowledges = () => {
  return async (dispatch) => {
    dispatch(setKnowledgeFetchingToState());
    await doLoadTopListKnowledges(dispatch);
  };
};

const doLoadKnowledges = async (dispatch) => {
  try {
    const res = await httpClient.get(`${apiUrl}/${server.KNOWLEDGE_URL}`);
    if (res.data.isSuccess) {
      dispatch(setKnowledgeSuccessToState(res.data));
    } else {
      dispatch(setKnowledgeFailedToState());
    }
  } catch (e) {
    console.log(e);
    dispatch(setKnowledgeFailedToState());
  }
};

const doLoadTopListKnowledges = async (dispatch) => {
  try {
    const res = await httpClient.get(
      `${apiUrl}/${server.KNOWLEDGE_URL}/gettopknowledge`
    );
    if (res.data.isSuccess) {
      dispatch(setKnowledgeSuccessToState(res.data));
    } else {
      dispatch(setKnowledgeFailedToState());
    }
  } catch (e) {
    console.log(e);
    dispatch(setKnowledgeFailedToState());
  }
};
