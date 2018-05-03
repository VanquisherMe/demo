import React from 'react';
import { connect } from 'dva';
import {track, Chart, Geom, Axis, Tooltip,Legend} from 'bizcharts';
import { DataView } from '@antv/data-set';

track(false);
class Gdemo extends React.Component {

  render(){
    const {
      fields=[],
      data =[{"参数A":0.0,"参数C":0.0,"time":"2018/04/03","参数B":0.0},{"参数A":0.01,"参数C":0.0,"time":"2018/04/04","参数B":-0.2},{"参数A":0.06,"参数C":0.0,"time":"2018/04/08","参数B":-0.2},{"参数A":0.07,"参数C":0.01,"time":"2018/04/09","参数B":-0.25},{"参数A":0.08,"参数C":0.01,"time":"2018/04/10","参数B":1.67},{"参数A":0.09,"参数C":0.01,"time":"2018/04/11","参数B":1.96},{"参数A":0.1,"参数C":0.01,"time":"2018/04/12","参数B":0.94},{"参数A":0.11,"参数C":0.01,"time":"2018/04/13","参数B":0.22},{"参数A":0.13,"参数C":0.01,"time":"2018/04/15","参数B":0.22},{"参数A":0.13,"参数C":0.01,"time":"2018/04/16","参数B":-1.39},{"参数A":0.14,"参数C":0.01,"time":"2018/04/17","参数B":-2.95},{"参数A":0.15,"参数C":0.01,"time":"2018/04/18","参数B":-2.49},{"参数A":0.17,"参数C":0.01,"time":"2018/04/19","参数B":-1.31},{"参数A":0.18,"参数C":0.02,"time":"2018/04/20","参数B":-2.63},{"参数A":0.2,"参数C":0.02,"time":"2018/04/22","参数B":-2.63},{"参数A":0.21,"参数C":0.02,"time":"2018/04/23","参数B":-2.49},{"参数A":0.22,"参数C":0.02,"time":"2018/04/24","参数B":-0.49},{"参数A":0.23,"参数C":0.02,"time":"2018/04/25","参数B":-0.87},{"参数A":0.24,"参数C":0.02,"time":"2018/04/26","参数B":-2.77}],
    }= this.props;
    /*if(data.length == 0){
        return ("111")
    }*/
    const dv = new DataView().source(data);

    dv.transform({
      type: 'fold',
      fields: ["参数A","参数B","参数C"],
      key: 'fund',
      value: 'value'
    });
    const cols = {
      time:{
        type:'timeCat',
        mask: 'YYYY/MM/DD',
        tickCount:8

      }
    }

    console.log(dv)
    return (
      <div  >

        <Chart  animate={true} height={300}  data={dv} scale={cols} forceFit>
          <Legend  />
          <Axis name="time" />
          <Axis name="value" label={{formatter: val => `${val}%`}} />
          <Tooltip crosshairs={{type : "y"}}


          />
          <Geom type="line" position="time*value" size={2} color={'fund'} />
        </Chart>
      </div>
    )
  }
}



export default connect()(Gdemo);
