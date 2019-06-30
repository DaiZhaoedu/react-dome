import React, { Fragment } from 'react';
import logos from '../../../public/images/youkulog.png';
import Style from './top.css'
class Top extends React.Component {
    state = {
        hotSearch: ['这就是街舞', '巴巴爸爸', '极限挑战'],
        Downnull: false,
        navnull: true,
        headernav: ['首页', '动漫', '综艺', '娱乐', '首页', '动漫', '综艺', '娱乐', '动漫', '综艺', '娱乐', '首页', '动漫', '动漫', '综艺', '娱乐', '首页', '动漫', '动漫', '综艺', '娱乐', '首页', '动漫'],
        downnull: ['首页', '动漫', '综艺', '娱乐', <img alt="arrow"
                   onClick={()=>{this.setState({navnull:!this.state.navnull})}}
        src="https://img.alicdn.com/tfs/TB1qJ0cXKuSBuNjy1XcXXcYjFXa-44-44.png"/>, '首页', '动漫', '综艺', '娱乐', '动漫', '综艺', '娱乐', '首页', '动漫', '动漫', '综艺', '娱乐', '首页', '动漫', '动漫', '综艺', '娱乐', '首页', '动漫']
    }
    render() {
        return (
            <Fragment>
                <div className={Style.headerTop}>
                    <span>
                        <a href='www.youku.com'>
                            <img alt="log" src={logos} className={Style.yklogo} />
                        </a>
                    </span>
                    <span>
                        <div className={Style.search}>
                            <input onClick={this.hotSearchdown.bind(this)} type="text" name="" className={Style.searchInput} placeholder={'Hello,JackMa'} />
                            <img src={require('../../../public/images/search.png')} alt="" className={Style.searchlogo}></img>
                        </div>
                    </span>
                    <a key={2}href=''>
                        <img src="https://img.alicdn.com/tfs/TB10zdbXL5TBuNjSspmXXaDRVXa-44-44.png" alt="hot" className={Style.signin}></img>
                    </a>
                    {/* 热搜 */}
                    <div style={{ display: this.state.Downnull ? 'block' : 'none' }}
                        className={Style.hotsearch}

                    >
                        <div className={Style.searchTip}>
                            <i className={Style.hotiocn}></i>
                            {'大家都在搜'}
                        </div>
                        {
                            this.state.hotSearch.map((item, index) => {
                                // eslint-disable-next-line no-unused-expressions
                                return <ul>
                                    <a><li key={index} className={Style.hotsearchli}><div >{index + 1 + '、'}{item}</div></li></a>
                                </ul>
                            })
                        }
                        <div className={Style.searchclose} onClick={this.hotSearchdownclose.bind(this)}>关闭</div>
                    </div>
                    {/* 导航 */}

                </div>
                <nav className={Style.nav} style={{ display: this.state.navnull ? 'block' : 'none' }}>
                    <ul className={Style.headernav}>
                        {
                            this.state.headernav.map((item, index) => {
                                return <li key={index} className={Style.headernavLi}><a >{item}</a>
                                    <span></span>
                                </li>
                            })
                        }
                    </ul>
                    <img onClick={()=>{this.setState({ navnull: !this.state.navnull })}} src="https://img.alicdn.com/tfs/TB18vFaXGmWBuNjy1XaXXXCbXXa-44-44.png" alt="" className={Style.navarrow}></img>
                </nav>
                {/* 下拉导航 */}
                <div className={Style.panelnavcontainer} style={{ display: this.state.navnull ? 'none' : 'block' }}>
                    <ul className={Style.panelnav}>
                        {
                            this.state.downnull.map((item, index) => {
                                return <li key={index} className={Style.panelnavli}><a>{item}</a></li>
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
    hotSearchdown() {
        this.setState({
            Downnull: true
        })
    }
    hotSearchdownclose() {
        this.setState({
            Downnull: false
        })
    }

}

export default Top