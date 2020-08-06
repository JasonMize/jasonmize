import React, { useState } from 'react'

import AppLoadingSpinner from './AppLoadingSpinner'

export default ({ tinyUrl, tinySize, mediumUrl, url, style }) => {
	let [loaded, updateLoaded] = useState(false)
  
	return (
		<div
			className="image-gallery-image"
			style={{
				position: 'relative',
				width: style.maxWidth
			}}
		>
			<img
				onLoad={() => {
					updateLoaded(loaded = true)
				}}
				style={{
					display: loaded ? 'block' : 'none',
					margin: 0,
					padding: 0,
					...style,
				}}
				src={mediumUrl ? mediumUrl : url}
			/>
			<img
				style={{
					width: `${tinySize}px`,
					display: loaded ? 'none' : 'block',
					filter: 'blur(2px)',
					margin: 0,
					padding: 0,
					...style,
				}}
				src={tinyUrl}
			/>
			
			{!loaded && (
				<AppLoadingSpinner />
			)}
			
		</div>
	);
}
