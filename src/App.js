import React, { useState } from 'react';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Icon28GridSquareOutline from '@vkontakte/icons/dist/28/grid_square_outline';
import Icon28StatisticsOutline from '@vkontakte/icons/dist/28/statistics_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import '@vkontakte/vkui/dist/vkui.css';

import Topics from './views/Topics';
import Rating from './views/Rating';
import Achievements from './views/Achievements';
import Friends from './views/Friends';
import Settings from './views/Settings';

const App = () => {
	const [activeStory, setActiveStory] = useState('topics');
	
	const onStoryChange = ({ currentTarget: { dataset: { story } }}) => {
		setActiveStory(story)
	};

	return (
		<ConfigProvider isWebView={true}>
			<Epic activeStory={activeStory} tabbar={
				<Tabbar>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'topics'}
						data-story='topics'
						text='Темы'
					>
						<Icon28GridSquareOutline />
					</TabbarItem>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'rating'}
						data-story='rating'
						text='Рейтинг'
					>
						<Icon28StatisticsOutline />
					</TabbarItem>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'achievements'}
						data-story='achievements'
						label='3'
						text='Достижения'
					>
						<Icon28FireOutline />
					</TabbarItem>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'friends'}
						data-story='friends'
						text='Друзья'
					>
						<Icon28Users3Outline />
					</TabbarItem>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'settings'}
						data-story='settings'
						text='Настройки'
					>
						<Icon28SettingsOutline />
					</TabbarItem>
				</Tabbar>
			}>
				<Topics id='topics' />
				<Rating id='rating' />
				<Achievements id='achievements' />
				<Friends id='friends' />
				<Settings id='settings' />
			</Epic>
		</ConfigProvider>
	);
};

export default App;

