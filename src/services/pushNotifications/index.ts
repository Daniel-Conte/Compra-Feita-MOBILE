import axios from 'axios';

import type { PushNotificationMessage } from './types';

const pushNotificationsApi = {
  async send(message: PushNotificationMessage) {
    const res = await axios.post('https://exp.host/--/api/v2/push/send', message, {
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  },
};

export default pushNotificationsApi;
