import React, { PureComponent } from "react"
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style"
import banner from "../../static/imgs/banner-img.jpg"
import Recommend from "./components/Recommend"
import List from "./components/List"
import Topic from "./components/Topic"
import Download from "./components/Download"
import Writer from "./components/Writer"
import { connect } from "react-redux"
import { actionCreators } from "./store"

class Home extends PureComponent {
	componentDidMount() {
		this.props.changeHomeData()
		this.bindEvent()
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.props.changeScrollTopShow)
	}

	bindEvent() {
		window.addEventListener("scroll", this.props.changeScrollTopShow)
	}

	render() {
		const { showBackTop } = this.props
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" src={banner} alt="" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Download />
					<Writer />
				</HomeRight>
				{showBackTop ? (
					<BackTop onClick={() => window.scrollTo(0, 0)}>
						<i className="iconfont">&#xe655;</i>
					</BackTop>
				) : null}
			</HomeWrapper>
		)
	}
}

const mapState = state => ({
	showBackTop: state.getIn(["home", "showBackTop"])
})
const mapDispatch = dispatch => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeData())
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleBackTop(true))
		} else {
			dispatch(actionCreators.toggleBackTop(false))
		}
	}
})

export default connect(mapState, mapDispatch)(Home)
