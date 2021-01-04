import React from 'react';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import { Theme } from '@rmwc/theme';
import '@rmwc/top-app-bar/styles';

import './topNav.scss';

function TopNav() {
	return (
		<div>
			<Theme use={['background']}>
				<TopAppBar className="black-ops" fixed>
					<TopAppBarRow>
						<TopAppBarSection alignStart>
							<TopAppBarTitle style={{ color: 'black', fontFamily: 'Black Ops One' }}>FRIENDS MASTI</TopAppBarTitle>
						</TopAppBarSection>
					</TopAppBarRow>
				</TopAppBar>
				<TopAppBarFixedAdjust />
			</Theme>
		</div>
	);
}

export default TopNav;
