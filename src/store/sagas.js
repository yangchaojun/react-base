import { takeEvery, put } from "redux-saga/effects"
import { GET_INIT_LIST } from "./actionTypes"
import { initTodoList } from "./actionCreators"
function* getInitList() {
	try {
		let data = yield fetch("/list")
		data = yield data.json()
		const action = initTodoList(data)
		yield put(action)
	} catch (e) {
		console.log("网络请求失败")
	}
}

function* mySaga() {
	yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga
