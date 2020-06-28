import React, { Component } from 'react'

export default class ProgressiveImage extends Component {
	state = { loaded: false };
  
  render() {
		const { tinyUrl, tinySize } = this.props;
		const { loaded } = this.state;
		
		return (
			<div
				className="image-gallery-image"
				style={{
					width: this.props.style.maxWidth
				}}
			>
				<img
					onLoad={() => {
						this.setState({ loaded: true });
					}}
          style={{
						display: loaded ? 'block' : 'none',
						margin: 0,
						padding: 0,
            ...this.props.style,
          }}
					src={this.props.mediumUrl}
				/>
				<img
					style={{
						width: `${tinySize}px`,
            display: loaded ? 'none' : 'block',
						filter: 'blur(2px)',
						margin: 0,
						padding: 0,
            ...this.props.style,
          }}
					src={tinyUrl}
				/>
			</div>
		);
	}
}