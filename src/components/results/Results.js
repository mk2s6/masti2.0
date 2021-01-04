import React, { useEffect } from 'react';
import { Typography } from '@rmwc/typography';
import { Card } from '@rmwc/card';
import { Elevation } from '@rmwc/elevation';
import { Portal } from '@rmwc/base';

import './Results.scss';

import '@rmwc/typography/styles';
import './Results.scss';
import '@rmwc/card/styles';
import '@rmwc/elevation/styles';

function Results(props) {
	useEffect(() => {
		console.log(props);
	}, [props]);

	return (
		<div>
			<Elevation z={24} wrap>
				<Card style={{ margin: '1rem auto', width: '90%', height: '32rem' }}>
					<Typography use="button"> Results </Typography>
				</Card>
			</Elevation>
			<Portal />
		</div>
	);
}

export default Results;
