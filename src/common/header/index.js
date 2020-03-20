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
	function getListArea() {
		if (props.focused) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{props.list.map(item => (
							<SearchInfoItem key={item}>{item}</SearchInfoItem>
						))}
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
					<CSSTransition in={props.focused} timeout={300} classNames="slide">
						<NavSearch
							className={props.focused ? "focused" : ""}
							onFocus={props.handleInputFocus}
							onBlur={props.handleInputBlur}
						/>
					</CSSTransition>
					<i className={props.focused ? "focused iconfont" : "iconfont"}>
						&#xe637;
					</i>
					{getListArea()}
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className="write-btn">
					<i className="iconfont">&#xe66d;</i>
					写文章
				</Button>
				<Button className="sign-up">注册</Button>
			</Addition>
		</HeaderWrapper>
	)
}

const mapStateToProps = state => ({
	focused: state.getIn(["header", "focused"]),
	list: state.getIn(["header", "list"])
})

const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.getList())
			dispatch(actionCreators.searchFoucs())
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
