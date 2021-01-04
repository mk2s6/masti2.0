import React, { memo, useState } from 'react';
import { Portal } from '@rmwc/base';
import { Select } from '@rmwc/select';
import { Radio } from '@rmwc/radio';
import { Button } from '@rmwc/button';
import { FormField } from '@rmwc/formfield';
import { createDialogQueue, DialogQueue } from '@rmwc/dialog';

import { getOptions } from '../../controllers/questions';

import '@rmwc/select/styles';
import '@rmwc/formfield/styles';
import '@rmwc/radio/styles';
import '@rmwc/dialog/styles';

const { dialogs, alert } = createDialogQueue();

const FireAlert = () => alert({ title: '', body: 'Please choose a valid option to add question' });

function BuildQuestions(props) {
	const [questionId, setQuestionId] = useState();
	const [questions, setQuestions] = useState(props.questions);
	const [quizQuestions, setQuizQuestions] = useState([]);
	const [options, setOptions] = useState();
	const [selectOption, setSelectedOption] = useState();

	async function optionsForQuestion(id) {
		if (!!id) {
			let temp = await getOptions(id);
			setOptions(temp.data.data.items);
		} else {
			setOptions();
		}
	}

	function addQuestions(q, o) {
		if (!!q && !!o) {
			let temp = questions.filter((ques) => {
				return ques.id !== q;
			});
			let tempQuiz = [...quizQuestions, { question: q, correct_option: o }];
			setQuizQuestions(tempQuiz);
			setOptions();
			if (temp.length === 0) {
				setQuestions([{ question: 'Please submit to complete Build...', id: 0 }]);
			} else {
				setQuestions(temp);
			}
			setQuestionId(questions[0].id);
		}
	}

	return (
		<div>
			<Select
				label="Choose a question to Build Quiz"
				outlined
				enhanced
				required
				value={questionId}
				disabled={(!!quizQuestions && quizQuestions.length === 10) || (!!questions && questions.length === 1 && questions[0].id === 0)}
				options={
					questions.length > 0 &&
					questions.map((q) => {
						return { label: q.question, value: q.id };
					})
				}
				onChange={(evt) => {
					optionsForQuestion(evt.target.value);
					setQuestionId(evt.target.value);
				}}
			/>
			<Portal />
			<FormField style={{ margin: '0.5rem auto', display: 'block', width: '70%' }}>
				{!!options &&
					options.map((opt) => {
						return (
							<Radio
								key={opt}
								style={{ display: 'block', width: '100%' }}
								value={opt}
								label={opt}
								name={`options_select_${questionId}`}
								onChange={(evt) => setSelectedOption(evt.currentTarget.value)}
							/>
						);
					})}
			</FormField>
			<FormField style={{ margin: '0.5rem auto', display: 'block', width: '70%' }}>
				{!!options && (
					<Button
						raised
						label="Add Question"
						onClick={(e) => {
							if (!!!selectOption) {
								FireAlert();
							} else {
								addQuestions(parseInt(questionId), selectOption);
							}
						}}
					/>
				)}
			</FormField>
			<div style={{ display: 'flex', margin: '0.5rem auto', width: '115%', alignItems: 'center' }}>
				<FormField style={{ margin: '0.2rem auto' }}>{!!quizQuestions && quizQuestions.length === 2 && <Button raised label="Submit" />}</FormField>
			</div>
			<DialogQueue dialogs={dialogs} />
		</div>
	);
}

export default memo(BuildQuestions);
