import React, { PureComponent } from "react"
import { ListItem, ListInfo, LoadMore } from "../style"
import { connect } from "react-redux"
import { actionCreators } from "../store"
import { Link } from "react-router-dom"

class List extends PureComponent {
	render() {
		const { list, getMoreList, pageNo } = this.props
		return (
			<div>
				{list.map((item, index) => (
					<Link to="/detail" key={index}>
						<ListItem >
							<img className="pic" src={item.get("imgUrl")} alt="" />
							<ListInfo>
								<h3 className="title">{item.get("title")}</h3>
								<p className="desc">{item.get("desc")}</p>
							</ListInfo>
						</ListItem>
					</Link>
				))}
				<LoadMore onClick={() => getMoreList(pageNo)}>加载更多</LoadMore>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	list: state.getIn(["home", "articleList"]),
	pageNo: state.getIn(["home", "pageNo"])
})

const mapDispatchToProps = dispatch => ({
	getMoreList(pageNo) {
		dispatch(actionCreators.getMoreList(pageNo))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
