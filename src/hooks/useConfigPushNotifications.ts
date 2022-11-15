import { useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import type { Subscription } from 'expo-modules-core';

import registerForPushNotifications from '@utils/registerForPushNotifications';

const useConfigPushNotifications = () => {
  //const notificationListener = useRef<Subscription>();
  //const responseListener = useRef<Subscription>();

  useEffect(() => {
    registerForPushNotifications().then(token => console.log(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    // notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    //   console.log('a', notification);
    // });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log('b', response);
    // });

    // return () => {
    //   if (notificationListener.current)
    //     Notifications.removeNotificationSubscription(notificationListener.current);

    //   if (responseListener.current)
    //     Notifications.removeNotificationSubscription(responseListener.current);
    // };
  }, []);
};

export default useConfigPushNotifications;
