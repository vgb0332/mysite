import React, { Component } from 'react';
import { ViewerTemplate } from './ViewerTemplate';
import SpaceNavigator from './SpaceNavigator';
import Viewer from './Viewer';
import moment from 'moment';

import * as api from '../../lib/api';

export class Nasa extends Component {
  // getAPOD = (date) => {
  //   api.getAPOD(date).then((response)=>{
  //     console.log(response);
  //   });
  // }

  state = {
    loading: false,
    maxDate: null,
    date: null,
    urL: null,
    mediaType: null
  }

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(prevDate);
  }

  handleNext = () => {
    const { date, maxDate } = this.state;
    if(date === maxDate) return;
    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(nextDate);
  }

  getAPOD = async (date) => {
    if(this.state.loading) return;

    this.setState({
      loading: true
    });

    try {
      const response = await api.getAPOD(date);
      // 비구조화 할당 + 새로운 이름
      const { date: retrievedDate, url, media_type: mediaType } = response.data;

      if(!this.state.maxDate) {
        // 만약에 maxDate 가 없으면 지금 받은 date 로 지정
        this.setState({
          maxDate: retrievedDate
        })
      }

      // 전달받은 데이터 넣어주기
      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });

    } catch (e) {
      // 오류가 났을 경우
      console.log(e);
    }

    // 로딩 상태 종료
     this.setState({
       loading: false
     });
  }


  componentDidMount() {
    this.getAPOD('');
  }

  render() {
    const{ url, mediaType, loading } = this.state;
    const { handlePrev, handleNext } = this;

    return(
      <ViewerTemplate
        spaceNaviator = {<SpaceNavigator onPrev={handlePrev} onNext={handleNext} />}
        viewer={(
          <Viewer
            url={url}
            mediaType={mediaType}
            loading={loading}/>
        )}
      />
    );
  }
}
