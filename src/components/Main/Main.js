import React, { Fragment } from 'react';
import Style from './main.css';
import { Carousel } from 'antd';
import { BackTop } from 'antd';
import { Link } from 'dva/router';
import axios from 'axios'
class Main 
extends React.Component {
    state = {
        videoList: []
    }
    render() {
        var settings = {
            dots: true,
            autoplay: true
        }
        return (
            
            <Fragment>
                <Carousel {...settings} className={Style.CarouselImg}> 
                    {
                        this.state.videoList.map((item, index) => {
                            // console.log(item.data.cover.blurred)
                            return (
                                <div key={item.data.duration} className={Style.swiper}>
                                    <h3>
                                        <Link to={
                                            {
                                                pathname:'/Detail',
                                                query:{
                                                    date:item.data.date
                                                }
                                            }
                                            }>
                                             <img src={item.data.cover.detail} alt=''/>
                                             <div className={Style.sliderDescContainer}>
                                                <span className={Style.sliderTitle}>{item.data.title}</span>
                                             </div>
                                        </Link>
                                    </h3>
                                </div>
                            )
                        })
                    }
                </Carousel>

                <div className={Style.pbbContainer}>
                    {
                        this.state.videoList.map((item,index)=>{
                    return(        
                    <Link to={
                        {
                            pathname:'/Detail',
                            query:{
                                date:item.data.data
                            }
                        }    
                    }>
                       <div className={Style.pbbDescContainer} >
                           <div style={{position:'relative'}}>
                               <img src={item.data.cover.detail} className={Style.pbbImg} alt='no'/>
                               <div className={Style.name}>{item.data.provider.name}</div>
                               <div className={Style.pName}>{item.data.description}</div>
                           </div>
                       </div>
                    </Link>
                        )
                     })
                  }
                </div>
                <div className={Style.goToChannel} onClick={this.sorta.bind(this)}>
                     换一换
                     <img src="https://gw.alicdn.com/tfs/TB1Jo7SGwTqK1RjSZPhXXXfOFXa-36-36.png" alt="" class="toChannelImg"/>
                 </div>
                <div className={Style.Foot}>
                       <div>Copyright©2019 优酷 youku.com 版权所有</div>
                 </div>
                <BackTop >
                <img className={Style.backtop} src="//gw.alicdn.com/tfs/TB1mMz2LMTqK1RjSZPhXXXfOFXa-168-168.png" alt="" />
                </BackTop>
            </Fragment>
        )
    }
 async sorta(){
           const video = await axios.get('https://api.apiopen.top/videoRecommend?id=127398')
        const videoList = video.data.result
        videoList.shift()
        function randomsort(a,b){
            return Math.random()>.5?-1:1//随机产生0到1的数，判断是否大于0.5
        }

        videoList.sort(randomsort)
        console.log(videoList)
        this.setState({
            videoList
        })
     
    }
    componentDidMount() {
        this.sorta()
        // console.log(this)
    }

}
export default Main
