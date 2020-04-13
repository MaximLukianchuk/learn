import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';

import Persik from '../../panels/Persik';

const Settings = ({ id }) => (
  <View id={id} activePanel='persik'>
    <Persik id='persik' />
  </View>
)

export default Settings;
