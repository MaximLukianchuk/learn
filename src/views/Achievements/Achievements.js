import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';

import Spotty from '../../panels/Spotty';

const Achievements = ({ id }) => (
  <View id={id} activePanel='spotty'>
    <Spotty id='spotty' />
  </View>
)

export default Achievements;
