import React from 'react';
import {Button,TabBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
class Mytab extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		selectedTab: 'blueTab',
		hidden: false,
		fullScreen: false,
	  };
	}
  
	renderContent(pageText) {
	  return (
		<div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
		  <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
		  <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
			onClick={(e) => {
			  e.preventDefault();
			  this.setState({
				hidden: !this.state.hidden,
			  });
			}}
		  >
			Click to show/hide tab-bar
		  </a>
		  <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
			onClick={(e) => {
			  e.preventDefault();
			  this.setState({
				fullScreen: !this.state.fullScreen,
			  });
			}}
		  >
			Click to switch fullscreen
		  </a>
		</div>
	  );
	}
  
	render() {
	  return (
		<div style={ { position: 'fixed', width: '100%', top: 0 } }>
		  <TabBar
			unselectedTintColor="#949494"
			tintColor="#33A3F4"
			barTintColor="white"
		  >
			<TabBar.Item
			  title="首页"
			  key="home"
			  icon={<div style={{
				width: '22px',
				height: '22px',
				background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
			  />
			  }
			  selectedIcon={<div style={{
				width: '22px',
				height: '22px',
				background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
			  />
			  }
			  selected={this.state.selectedTab === '/home'}
			  onPress={() => {
                this.props.history.push('/home')
			  }}
			  data-seed="logId"
			>
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<div style={{
				  width: '22px',
				  height: '22px',
				  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
				/>
			  }
			  selectedIcon={
				<div style={{
				  width: '22px',
				  height: '22px',
				  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
				/>
			  }
			  title="口碑"
			  key="koubei"
			  badge={'new'}
			  selected={this.state.selectedTab === '/koubei'}
			  onPress={() => {
				this.props.history.push('/koubei')
			  }}
			  data-seed="logId1"
			>
			  <Button onClick={()=>{
                  this.props.history.push('/doc')
              }} type="primary">ToDOC</Button>
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<div style={{
				  width: '22px',
				  height: '22px',
				  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
				/>
			  }
			  selectedIcon={
				<div style={{
				  width: '22px',
				  height: '22px',
				  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
				/>
			  }
			  title="Friend"
			  key="Friend"
			  dot
			  selected={this.state.selectedTab === 'greenTab'}
			  onPress={() => {
				this.setState({
				  selectedTab: 'greenTab',
				});
			  }}
			>
			</TabBar.Item>
			<TabBar.Item
			  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
			  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
			  title="My"
			  key="my"
			  selected={this.state.selectedTab === 'yellowTab'}
			  onPress={() => {
				this.setState({
				  selectedTab: 'yellowTab',
				});
			  }}
			>
			</TabBar.Item>
		  </TabBar>
		</div>
	  );
	}
  }

export default withRouter(Mytab);