import * as constants from "./constants"
import {fromJS} from 'immutable'
const changeHomeData = data => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: data.topicList,
	recommendList: data.recommendList,
	articleList: data.articleList
})

const addArticleList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	articleList: fromJS(list),
	nextPage
})

export const getHomeData = () => {
	return dispatch => {
		fetch("/api/homeData.json")
		.then(res => res.json())
		.then(res => {
			dispatch(changeHomeData(res.data))
		})
	}
}

export const getMoreList = (pageNo) => {
	return dispatch => {
		fetch("/api/articleList.json?pageNo=" + pageNo)
		.then(res => res.json())
		.then(res => {
			dispatch(addArticleList(res.data, pageNo + 1))
		})
	}
}

export const toggleBackTop = (show) => ({
	type: constants.TOGGLE_BACK_TOP,
	show
})