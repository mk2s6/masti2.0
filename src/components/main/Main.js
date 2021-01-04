import React, { useState, memo } from 'react';
import SlideRoutes from 'react-slide-routes';
// import { Portal } from '@rmwc/base';z
import { Switch, Route, useLocation } from 'react-router-dom';

import TopNav from '../topNavigation/topNav';
import NavTabs from '../tabBar/tabBar';
import Message from '../message/Message';
import AnswerQuestions from '../answer_questions/AnswerQuestions';
import BuildQuiz from '../build_quiz/BuildQuiz';
import Results from '../results/Results';

import './Main.scss';

function Main() {
	const location = useLocation();
	const [message, setMessage] = useState();
	const [displayMessage, setDisplayMessage] = useState(false);

	return (
		<div>
			<TopNav />
			<NavTabs />
			<Switch>
				<SlideRoutes location={location} duration={500}>
					<Route path="/create" render={() => <BuildQuiz setMessage={setMessage} setDisplayMessage={setDisplayMessage} />} />
					{/* <BuildQuiz key={displayMessage} setMessage={setMessage} setDisplayMessage={setDisplayMessage} /> */}
					{/* </Route> */}
					<Route path="/answer" component={AnswerQuestions} />
					<Route path="/result" component={Results} />
				</SlideRoutes>
			</Switch>
			<Message setDisplayMessage={setDisplayMessage} openMessage={displayMessage} message={message} />
		</div>
	);
}

export default memo(Main);
