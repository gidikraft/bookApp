import { getAI, getGenerativeModel } from '@react-native-firebase/ai';
import { getApp } from '@react-native-firebase/app';
import { PrimaryInput } from 'components';
import Box from 'components/Box';
import Button from 'components/Button';
import { PageWrapper } from 'components/layouts';
import VIcons from 'components/VIcons';
import { RootTabScreenProps } from 'navigation/types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, Text } from 'react-native';

const Dashboard = ({ navigation }: RootTabScreenProps<'HomeScreen'>) => {
	const [aiContent, setAIContent] = React.useState<string>('');
	const [loadingContent, setLoadingContent] = React.useState<boolean>(false);

	const {
		control,
		formState: { errors },
		setValue,
		handleSubmit,
	} = useForm({
		defaultValues: {
			aiprompt: '',
		},
	});

	const openModal = () => {
		navigation.navigate('AppModal');
	};

	const generateContent = async (data: { aiprompt: string }) => {
		try {
			setLoadingContent(true);
			setAIContent('Generating content...');

			const app = getApp();
			const ai = getAI(app);
			const model = getGenerativeModel(ai, { model: 'gemini-3-flash-preview' });

			const result = await model.generateContentStream(data.aiprompt);

			let text = '';
			for await (const chunk of result.stream) {
				const chunkText = chunk.text();
				text += chunkText;
			}

			setValue('aiprompt', '');
			setAIContent(text);
			setLoadingContent(false);
		} catch (error) {
			console.error('Error generating content:', error);
			setAIContent('Error generating content. Please try again.');
			setLoadingContent(false);
			openModal();
		}
	};

	return (
		<PageWrapper mode='view'>
			<ScrollView
				contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}
				showsVerticalScrollIndicator={false}
			>
				<Text>{'Gemini response: ' + aiContent}</Text>
			</ScrollView>

			<Box gap='md'>
				<PrimaryInput
					name='aiprompt'
					placeholder="What's on your mind today?"
					control={control}
					label='Ask Gemini'
					editable={!loadingContent}
					rules={{
						required: 'Enter a prompt to generate content',
						minLength: {
							value: 2,
							message: 'Prompt must be 2 or more characters',
						},
					}}
					errorMessage={errors.aiprompt?.message}
				/>

				<Button
					label={loadingContent ? 'Generating...' : 'Generate Content'}
					onPress={handleSubmit(generateContent)}
					isLoading={loadingContent}
					mt='md'
					icon={<VIcons name='renren' size={'small'} color='#fff' />}
					// style={styles.generateBtn}
				/>
			</Box>
		</PageWrapper>
	);
};

export default Dashboard;
