import React from "react"
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button
} from "./style"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"

const Header = props => {
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
					<CSSTransition
						in={props.focused}
						timeout={200}
						classNames="slide"
					>
						<NavSearch
							className={props.focused ? "focused" : ""}
							onFocus={props.handleInputFocus}
							onBlur={props.handleInputBlur}
						/>
					</CSSTransition>
					<i className={props.focused ? "focused iconfont" : "iconfont"}>
						&#xe637;
					</i>
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
	focused: state.header.focused
})

const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus() {
			const action = {
				type: "SEARCH_FOCUSED"
			}
			dispatch(action)
		},
		handleInputBlur() {
			const action = {
				type: "SEARCH_BLURED"
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
