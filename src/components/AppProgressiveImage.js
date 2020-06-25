import React, { Component } from 'react'

export default class ProgressiveImage extends Component {
	state = { loaded: false };
  
  render() {
		const { tinyUrl, tinySize } = this.props;
		const { loaded } = this.state;
		
		return (
			<span>
				<img
					onLoad={() => {
						this.setState({ loaded: true });
					}}
          style={{
            ...this.props.style,
            display: loaded ? 'block' : 'none'
          
          }}
					src={this.props.mediumUrl}
				/>
				<img
					style={{
            ...this.props.style,
            width: `${tinySize}px`,
            display: loaded ? 'none' : 'block',
            filter: 'blur(2px)'
          }}
					src={tinyUrl}
				/>
			</span>
		);
	}
}