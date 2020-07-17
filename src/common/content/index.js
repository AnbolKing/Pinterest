import React, { Component } from 'react';
import {
  Container,
  Pic
} from './style';
import axios from 'axios';
import { connect } from 'react-redux';
import testPic from '../../static/test.jpg'

class Content extends Component {

  componentDidMount() {
    this.props.getPic(); 
  }

  render() {
    return (
      <div>
        <Container>
          <Pic>
            {
              this.props.data.map((item,index) => {
                if(item.url) {
                  return (
                    <div className="eachPic" key={index} style={{paddingBottom:item.height,left:item.left+'px',top:item.top+'px'}}>
                      <img src={item.url} alt={index} key={index}/>
                    </div>
                  );
                }
              })
            }
          </Pic>
        </Container>
      </div>
    )
  }
}

const mapState = (state) => {
  console.log(state.get('content').get('picList').toJS());
  return {
    data:state.get('content').get('picList').toJS(),
  }
}

const mapDispatch = (dispatch) => {
  return {
    async getPic() {
    //  var timer = 0;
      var picData = [
        {
          id:0,
          url:testPic,
          height:150,
          width:150,
          top:50,
          left:1000,
        }
      ];
      for(var j=1;j<=10;j++) {
        console.log(1);
        try {
          console.log(2);
          let res = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
          let result = res.data;
          var pic = {
            id:result[0].id,
            url:result[0].url,
            height:result[0].height,
            width:result[0].width,
            top:0,
            left:0,
          }
          picData.push(pic);
          console.log(3);
        }
        catch(err) {
          console.log("error"+err);
        }
      }
      // var loop = setInterval(async () => {
      //   console.log(1);
      //   timer = timer + 1;
      //   if(timer === 20) {
      //     clearInterval(loop);
      //   }
      //   try {
      //     console.log(2);
      //     let res = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
      //     let result = res.data;
      //     var pic = {
      //       id:result[0].id,
      //       url:result[0].url,
      //       height:result[0].height,
      //       width:result[0].width,
      //       top:0,
      //       left:0,
      //     }
      //     picData.push(pic);
      //     console.log(3);
      //   }
      //   catch(err) {
      //     console.log("error"+err);
      //   }
      //   console.log(3);
        // axios.get('https://api.thecatapi.com/v1/images/search?size=full').then((res) => {
        //   const result = res.data;
        //   var pic = {
        //     id:result[0].id,
        //     url:result[0].url,
        //     height:result[0].height,
        //     width:result[0].width,
        //     top:0,
        //     left:0,
        //   }
        //   picData.push(pic);
        // }).catch(e => {
        //   console.log("error: "+e);
        // })
      // },10)
      var nodeWidth = 200;
      var colNum = 7;
      var colSumHeight = [];
      for(var i=0;i<colNum;i++) {
        colSumHeight.push(0);
      }
    //  console.log(picData,picData.length);
      picData.forEach((item) => {
        console.log(item);
        var idx = 0;
        var minSumHeight = colSumHeight[0];
        for(var i=0;i<colSumHeight.length;i++) {
          if(minSumHeight > colSumHeight[i]) {
            minSumHeight = colSumHeight[i];
            idx = i;
          }
        }
        item.left = nodeWidth * idx;
        item.top = minSumHeight;
    //    console.log(item);
        colSumHeight[idx] += item.height;
        const action = {
          type:'get_pic',
          data:item
        }
        dispatch(action);
      })
    },
  }
}

export default connect(mapState,mapDispatch)(Content);