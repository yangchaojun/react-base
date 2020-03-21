import React from "react"
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	NavSearch,
	Addition,
	Button
} from "./style"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"
import { actionCreators } from "./store"

const Header = props => {
	const {
		focused,
		list,
		page,
		totalPage,
		mouseIn,
		handleInputBlur,
		handleInputFocus,
		handleMouseEnter,
		handleMouseLeave,
		handleChangePage
	} = props
	let spinIcon = null

	function getListArea() {
		const newList = list.toJS()
		if (focused || mouseIn) {
			const itemList = []
			if (newList.length) {
				for(let i = (page - 1) * 9; i < page * 9; i ++) {
					itemList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
				}
			}
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, spinIcon)}>
							<i ref={(icon) => { spinIcon = icon}} className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
					 {itemList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else return null
	}
	return (
		<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className="left active">首页</NavItem>
				<NavItem className="left">下载App</NavItem>
				<NavItem className="right">登录</NavItem>
				<NavItem className="right">
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition in={focused} timeout={300} classNames="slide">
						<NavSearch
							className={focused ? "focused" : ""}
							onFocus={() => handleInputFocus(list)}
							onBlur={handleInputBlur}
						/>
					</CSSTransition>
					<i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe637;</i>
					{getListArea()}
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className="write-btn">
					<i className="iconfont zoom">&#xe66d;</i>
					写文章
				</Button>
				<Button className="sign-up">注册</Button>
			</Addition>
		</HeaderWrapper>
	)
}

const mapStateToProps = state => ({
	focused: state.getIn(["header", "focused"]),
	list: state.getIn(["header", "list"]),
	mouseIn: state.getIn(["header", "mouseIn"]),
	page: state.getIn(["header", "page"]),
	totalPage: state.getIn(["header", "totalPage"]),
})

const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus(list) {
			if (list.size === 0) {
				dispatch(actionCreators.getList())
			}
			dispatch(actionCreators.searchFoucs())
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
			if (originAngle) {
				originAngle = parseInt(originAngle)
			} else {
				originAngle = 0
			}
			spin.style.transform = `rotate(${originAngle + 360}deg)`
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1))
			}
			else {
				dispatch(actionCreators.changePage(1))
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
