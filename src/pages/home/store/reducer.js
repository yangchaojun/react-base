import { fromJS } from "immutable"
import * as constants from './constants'
const initialState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	pageNo: 1,
	showBackTop: false
})

export default (state = initialState, action) => {
	switch (action.type) {
		case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
		case constants.ADD_ARTICLE_LIST:
      return state.merge({
				articleList: state.get('articleList').concat(action.articleList),
				pageNo: action.nextPage
      })
		case constants.TOGGLE_BACK_TOP:
      return state.set('showBackTop', action.show)
		default:
			return state
	}
}
