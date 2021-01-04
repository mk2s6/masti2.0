import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@rmwc/theme';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider
			options={{
				primary: '#ffdbcf',
				secondary: '#feeae6',
				error: '#b00020',
				background: '#fff',
				surface: '#fff',
				onPrimary: 'rgba(0, 0, 0, 0.87)',
				onSecondary: 'rgba(0, 0, 0, 0.87)',
				onSurface: 'rgba(0, 0, 0, 0.87)',
				onError: '#fff',
				textPrimaryOnBackground: 'rgba(0, 0, 0, 0.87)',
				textSecondaryOnBackground: 'rgba(0, 0, 0, 0.54)',
				textHintOnBackground: 'rgba(0, 0, 0, 0.38)',
				textDisabledOnBackground: 'rgba(0, 0, 0, 0.38)',
				textIconOnBackground: 'rgba(0, 0, 0, 0.38)',
				textPrimaryOnLight: 'rgba(0, 0, 0, 0.87)',
				textSecondaryOnLight: 'rgba(0, 0, 0, 0.54)',
				textHintOnLight: 'rgba(0, 0, 0, 0.38)',
				textDisabledOnLight: 'rgba(0, 0, 0, 0.38)',
				textIconOnLight: 'rgba(0, 0, 0, 0.38)',
				textPrimaryOnDark: 'white',
				textSecondaryOnDark: 'rgba(255, 255, 255, 0.7)',
				textHintOnDark: 'rgba(255, 255, 255, 0.5)',
				textDisabledOnDark: 'rgba(255, 255, 255, 0.5)',
				textIconOnDark: 'rgba(255, 255, 255, 0.5)',
			}}
		>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
