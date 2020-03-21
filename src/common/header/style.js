import styled from 'styled-components'
import logPic from '../../static/imgs/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
`

export const Logo = styled.a.attrs({
  href: "/"
})`
  width: 100px;
  height: 56px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${logPic}) no-repeat;
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 56px;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  padding-left: 15px;
  .zoom {
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    position: absolute;
    right: 5px;
    bottom: 5px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 15px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  &:before {
    position: absolute;
    background-color: #fff;
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    top: -5px;
    z-index: -1;
    box-sizing: border-box;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
    box-sizing: border-box;
  }
`
export const SearchInfoTitle = styled.div`
  line-height: 20px;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  padding: 0 5px;
  line-height: 20px;
  font-size: 14px;
  color: #787878;
  border: 1px solid #ddd;
  float: left;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover {
    color: #333;
    border-color: #b4b4b4;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 15px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }

  &.slide-enter, &.slide-exit {
    transition: all .3s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit-active {
    width: 240px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.sign-up {
    color: #ea6f5a;
  }
  &.write-btn {
    color: #fff;
    background: #ec6149;
  }
`