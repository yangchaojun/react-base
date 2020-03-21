import * as constants from "./constants"
import { fromJS } from "immutable"
const changeList = data => ({
	type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 9)
})

export const searchFoucs = () => ({
	type: constants.SEARCH_FOUCSED
})

export const searchBlur = () => ({
	type: constants.SEARCH_BLURED
})

export const getList = () => {
	return dispatch => {
		fetch("/api/headList.json")
			.then(res => res.json())
			.then(res => {
				dispatch(changeList(res.data))
			})
	}
}

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})
