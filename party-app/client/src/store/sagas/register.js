import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* initRegisterSaga(action) {
  console.log(action);
  
    // try{
    //     const response = yield axios.get(`/register/${action.id}`)
    //     yield put(actions.setRegister(response.data));
    // } catch(error) {
    //     yield put(actions.fetchDataFailed());
    // }
}