import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Card,
	Headline,
	Separator,
	Cell,
	Subhead,
	Button,
	Progress,
	Div,
	Text,
} from "@vkontakte/vkui/";

const Snippet = (props) => {
	const img = 'https://thumbs.gfycat.com/UnsungRipeBobolink-max-1mb.gif'

	return (
		<Panel id={props.id} centered>
			<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="target"/>}>
				Сниппет
			</PanelHeader>
			<Card>
				<Card
					style={{
						width: 351,
						height: 140,
						borderBottomRightRadius: 0,
						borderBottomLeftRadius: 0,
						background: ` no-repeat center/50% url(${img})`,
					}}
				/>
				<Div>
					<Div>
						<Headline weight="semibold">
							Добряши помогают котикам
						</Headline>
						<Subhead
							weight="regular"
							style={{ color: "var(--text_secondary)" }}
						>
							Матвей Правосудов · Закончится через 5 дней
						</Subhead>
					</Div>
					<Separator />
					<Cell
						description={<Progress />}
						indicator={
							<Button mode="outline" disabled>
								Помочь
							</Button>
						}
					>
						<Text weight="regular">Помогите первым</Text>
					</Cell>
				</Div>
			</Card>
		</Panel>
	);
};

Snippet.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Snippet;
