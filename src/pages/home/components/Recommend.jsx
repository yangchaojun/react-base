import React, { PureComponent } from "react"
import { RecommendItem, RecommendWrapper } from "../style"
import { connect } from "react-redux"

class Recommend extends PureComponent {

	render() {
		const { list } = this.props
		return (
			<RecommendWrapper>
				{list.map(item => (
					<RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
				))}
			</RecommendWrapper>
		)
	}
}

const mapStateToProps = state => ({
	list: state.getIn(["home", "recommendList"])
})
export default connect(mapStateToProps, null)(Recommend)
