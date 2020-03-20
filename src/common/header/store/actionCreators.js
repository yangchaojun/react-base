import * as constants from './constants'
import { fromJS } from 'immutable'

export const searchFoucs = () => ({
  type: constants.SEARCH_FOUCSED
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLURED
})

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    fetch('/api/headList.json')
      .then(res => res.json())
      .then(res => {
        dispatch(changeList(res.data))
      })
  } 
}