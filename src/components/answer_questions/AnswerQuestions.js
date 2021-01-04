import React from 'react';
import { Typography } from '@rmwc/typography';
import { Card } from '@rmwc/card';
import { Elevation } from '@rmwc/elevation';
import { Portal } from '@rmwc/base';

import '@rmwc/typography/styles';
import './AnswerQuestions.scss';
import '@rmwc/card/styles';
import '@rmwc/elevation/styles';

function AnswerQuestions() {
	return (
		<div>
			<Elevation z={18} wrap>
				<Card style={{ margin: '1rem auto', width: '90%', height: '32rem' }}>
					<Typography use="button"> Answer questions </Typography>
				</Card>
			</Elevation>
			<Portal />
		</div>
	);
}

export default AnswerQuestions;
