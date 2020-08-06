import React, { useState } from 'react'

import AppLoadingSpinner from './AppLoadingSpinner'
import { black } from '../constants/colors';

export default ({ tinyUrl=null, tinySize, mediumUrl, url, style }) => {
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

			{tinyUrl ? (
				<img
					style={{
						display: loaded ? 'none' : 'block',
						filter: 'blur(2px)',
						margin: 0,
						padding: 0,
						width: `${tinySize}px`,
						...style,
					}}
					src={tinyUrl}
				/>
			) : (
				<div
					style={{
						backgroundColor: black,
						display: loaded ? 'none' : 'block',
						margin: 0,
						padding: 0,
						height: `${tinySize}px`,
						width: `${tinySize}px`,
						...style,
					}}
				>
				</div>
			)}
				
			{!loaded && (
				<AppLoadingSpinner />
			)}
			
		</div>
	);
}
