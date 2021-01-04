import React from 'react';
import { Snackbar, SnackbarAction } from '@rmwc/snackbar';
import { Portal } from '@rmwc/base';

import '@rmwc/snackbar/styles';
import './Message.scss';

function Message(props) {
	return (
		<>
			<Snackbar
				open={props.openMessage}
				onClose={() => props.setDisplayMessage(false)}
				message={props.message}
				dismissesOnAction
				action={<SnackbarAction label="Dismiss" />}
				leading
			/>
			<Portal />
		</>
	);
}

export default Message;
