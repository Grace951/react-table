import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Status = {
	LOADING: "loading",
	LOADED: "loaded",
};

const ProgressiveImageStyled = styled.div`
	position: relative;
	width: 100%;
	img {
		max-width: 100%;
		max-height: 100%;
	}
`;

const ProgressiveImage = (props) => {
	const { className, src, preloader } = props;
	const [state, setState] = useState(Status.LOADING);
	useEffect(() => {
		const image = new Image();
		image.src = src;
		image.onload = () => {
			setState(Status.LOADED);
		};
		image.onerror = (err) => {
			//
		};
		if (image.complete === true) {
			setState(Status.LOADED);
		}
	}, []);

	const overlayStyles = {
		width: "100%",
		position: "absolute",
		left: "0",
		top: "0",
		transition: "opacity ease-in 100ms",
		maxWidth: "100%",
		opacity: state === Status.LOADED ? "0" : "1",
	};
	const Preloader = preloader;
	return (
		<ProgressiveImageStyled
			className={`progressiveImage ${className || ""}`}
		>
			{state === Status.LOADED && (
				<img on src={src} className={className} alt="" />
			)}
			{state !== Status.LOADED && Preloader && (
				<Preloader style={overlayStyles} />
			)}
		</ProgressiveImageStyled>
	);
};

export default ProgressiveImage;
