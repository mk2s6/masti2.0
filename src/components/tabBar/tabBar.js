import React, { useEffect, useState } from 'react';
import { TabBar, Tab } from '@rmwc/tabs';
import { Link, withRouter } from 'react-router-dom';
import { ThemeProvider } from '@rmwc/theme';

import '@rmwc/tabs/styles';
import '@rmwc/theme/styles';

const values = ['create', 'answer', 'result'];

function NavTabs(props) {
	const [activeTab, setActiveTab] = useState(values.indexOf(props.location.pathname.split('/')[1]));

	useEffect(() => {
		const location = props.location.pathname.split('/')[1];
		setActiveTab(values.indexOf(location));
	}, [props.location.pathname]);

	return (
		<div>
			<ThemeProvider
				options={{
					primary: '#000d',
					secondary: '#ffdbcf',
					onPrimary: '#ffdbcf',
					background: '#ffdbcf',
					surface: '#ffdbcf',
				}}
			>
				<TabBar activeTabIndex={activeTab} style={{ background: '#ffdbcf' }}>
					<Tab tag={Link} to="/create" id="create" icon="create_border" label="Create Quiz" />
					<Tab tag={Link} to="/answer" id="answer" icon="question_answer_border" label="Answer" />
					<Tab tag={Link} to="/result" id="result" icon="star_border" label="Results" />
				</TabBar>
			</ThemeProvider>
		</div>
	);
}

export default withRouter(NavTabs);
