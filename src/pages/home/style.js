import styled from "styled-components"

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	padding-top: 56px;
`

export const HomeLeft = styled.div`
	width: 625px;
	margin-left: 15px;
	float: left;
	padding-top: 30px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`
export const HomeRight = styled.div`
	width: 280px;
	float: right;
`
export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	height: 32px;
	line-height: 32px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	padding-right: 10px;
	overflow: hidden;
	margin-left: 18px;
	margin-bottom: 18px;
	.topic-pic {
		display: block;
		width: 32px;
		height: 32px;
		float: left;
		margin-right: 10px;
	}
`
export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow: hidden;
	.pic {
		width: 125px;
		display: block;
		float: right;
		height: 100px;
		border-radius: 10px;
	}
`
export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		font-size: 13px;
		line-height: 24px;
		color: #333;
	}
`

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${props => props.imgUrl});
	background-size: contain;
	margin-bottom: 6px;
`
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`

export const BackTop = styled.div`
	position: fixed;
	bottom: 40px;
	right: 40px;
	z-index: 1040;
	width: 52px;
	height: 52px;
	border: 1px solid #dcdcdc;
	padding-top: 10px;
	display: block;
	text-align: center;
	cursor: pointer;
	background: #fff;
	.iconfont {
		font-size: 20px;
	}
	&:hover {
		background: hsla(0, 0%, 71%, .1);
	}
`
