import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Div, File } from "@vkontakte/vkui/";
import Icon28PictureOutline from "@vkontakte/icons/dist/28/picture_outline";
import Icon24DismissOverlay from "@vkontakte/icons/dist/24/dismiss_overlay";

const Cover = ({ img, onChange, onClick }) => (
	<Div
		style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		}}
	>
		<Card
			style={{
				width: 351,
				height: 140,
				border: !img
					? "1px dashed #3F8AE0"
					: "1px solid var(--background_content)",
				borderRadius: 10,
				background: !img ? "var(--background_content)" : `url(${img})`,
				display: "flex",
				alignItems: !img ? "center" : "flex-start",
				justifyContent: !img ? "center" : "flex-end",
			}}
		>
			{!img ? (
				<File
					mode="tertiary"
					style={{ borderRadius: 10 }}
					onChange={onChange}
					accept="image/x-png,image/gif,image/jpeg"
					before={<Icon28PictureOutline />}
				>
					Выбрать обложку
				</File>
			) : (
				<Icon24DismissOverlay
					onClick={onClick}
					style={{ marginRight: 8, marginTop: 8 }}
				/>
			)}
		</Card>
	</Div>
);

Cover.propTypes = {
	img: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
};

export default Cover;
