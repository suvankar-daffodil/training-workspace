const FCM = require('fcm-node');

const fcm = new FCM(
  'AAAAi8_PDiM:APA91bELSUu_SDI1mOGC67Zojr7NSdLN7leSe67JKm5LJ2PQfIzz78iwP-PwccyPRaF4oNaNfEt-o_pTdxfnF7zGtDCplk-Md7TodWabc6MkJ2ih08IfLFFOBJIEFtvX12Ztt6GaRozq'
);

const message = {
  to:
    'dpV6taOkdR4:APA91bFpT8wKW1uEirSRRlYO_Hf5OYz95CPOk4yzZ24QEqv8UiQCZzzkSnuDoc0VqLrfRjv9NpGmVh4p5BMPwrYjmUNurTJ3qiMDtELgL4CfgxFrjpNyzg4UaRu9GKzD92bNmxdX6DER',
  notification: {
    title: 'Transit',
    body: 'New job arrived',
  },
};

fcm.send(message, (err, response) => {
  if (err) {
    console.log('Something has gone wrong!');
  } else {
    console.log('Successfully sent!');
  }
});
