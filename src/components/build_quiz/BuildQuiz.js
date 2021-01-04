import React, { memo, useState } from 'react';
import { Typography } from '@rmwc/typography';
import { Card } from '@rmwc/card';
import { Elevation } from '@rmwc/elevation';
import { Portal } from '@rmwc/base';
import { FormField } from '@rmwc/formfield';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';
import BuildQuestions from '../build_questions/BuildQuestions';

import { getQuestions } from '../../controllers/questions';
import { registerUser } from '../../controllers/users';

import { setMessageParams } from '../../utils/setMessageParams';
import { getUserFromLocal, setUserToLocal } from '../../utils/users';

import '@rmwc/typography/styles';
import './BuildQuiz.scss';
import '@rmwc/card/styles';
import '@rmwc/elevation/styles';
import '@rmwc/formfield/styles';
import '@rmwc/textfield/styles';

function BuildQuiz(props) {
	const [userName, setUserName] = useState();
	const [user, setUser] = useState(undefined);
	const [questions, setQuestions] = useState();
	const [helperText, setHelperText] = useState();
	const [quiz, setQuiz] = useState([]);

	async function fetchQuestions(props) {
		try {
			const questions = await getQuestions();
			setQuestions(questions.data.data.items);
			setMessageParams(props, questions.data.data.description);
		} catch (e) {
			console.log(e);
			setMessageParams(props, e.data.message);
		}
	}

	const userRegistration = async () => {
		try {
			const res = await registerUser(userName);
			setUserToLocal(userName, res.headers.m_q);
			setUser(getUserFromLocal());
			setMessageParams(props, res.data.data.description);
			fetchQuestions(props);
		} catch (e) {
			console.log(e);
			if (e.data.type === 0) {
				e.data.errors.forEach((err) => {
					setHelperText(err.message);
				});
			} else {
				setMessageParams(props, e.data.message);
			}
		}
	};

	const resetUser = () => {
		setUser(undefined);
		setQuestions(undefined);
	};

	return (
		<div>
			<Elevation z={8} wrap>
				<Card style={{ margin: '1rem auto', width: '90%', height: '32rem' }}>
					<div style={{ margin: '0.5rem auto' }}>
						<Typography use="button" tag="div">
							Quiz Builder
						</Typography>
					</div>
					<div style={{ margin: '0.5rem auto', width: '80%' }}>
						<FormField style={{ margin: '0 auto', width: '80%', display: 'flex', alignItems: 'center' }}>
							<TextField
								style={{ margin: '0 auto' }}
								size={64}
								outlined
								value={userName}
								onChange={(e) => {
									setUserName(e.target.value);
									setHelperText();
								}}
								type="text"
								required
								label="Enter your name.."
								pattern="[A-Za-z ]+"
								minLength={3}
								disabled={!!user}
								invalid={!!helperText}
								helpText={helperText}
							/>
						</FormField>
						<div style={{ display: 'flex', margin: '0.5rem auto', width: '100%', alignItems: 'center' }}>
							<FormField style={{ margin: 'auto' }}>
								<Button style={{ margin: '0 2px' }} raised label="Get questions" onClick={(e) => userRegistration()} disabled={!!user} />
								<Button style={{ margin: '0 2px' }} raised label="Reset" onClick={(e) => resetUser()} />
							</FormField>
						</div>
					</div>
					<div style={{ margin: '0.5rem auto', width: '80%' }}>
						<FormField style={{ display: 'block', width: '90%', alignItems: 'center' }}>
							{!!questions && <BuildQuestions questions={questions} />}
						</FormField>
					</div>
				</Card>
			</Elevation>
			<Portal />
		</div>
	);
}

export default memo(BuildQuiz);
