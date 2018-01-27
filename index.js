'use strict';


const AWSIoTclient = require('./utils/AWSIotClient');
const Alexa = require('alexa-sdk');

const YOUTUBE_TOPIC = 'AlyaSmartMirror:youtube_module';
const awsIotClient = new AWSIoTclient();
const config = require('./config.defaults');

const search_video_handlers = {
  'LaunchRequest': function () {
    this.response.speak('What do you want to search?').listen('can you say that again?');
    this.emit(':responseReady');
  },
  'YoutubeIntent': function () {
    const alexaBadRes = () => {
        this.response.speak('Something went wrong');
        this.emit(':responseReady');
      }
    ;

    const alexaGoodRes = () => {
        this.response.speak('choose video from the list');
        this.emit(':responseReady');
      }
    ;

    let searchTerm = this.event.request.intent.slots.searchTermVideo.value;
    if (!searchTerm) {
      alexaBadRes();
      awsIotClient.disconnect();
      return;
    }
    let alexaEmit = (err) => {
      if (err) {
        alexaBadRes();
        awsIotClient.disconnect();
        return;
      }
      alexaGoodRes();
      awsIotClient.disconnect();
    };
    awsIotClient.connect(config.awsIoTConfigs).then(() => {
      awsIotClient.publish(YOUTUBE_TOPIC, {
        "skill": "search_video",
        "searchTerm": searchTerm,
      }, {}, alexaEmit);

    });
  }
};

const next_handler = {
  'LaunchRequest': function () {
    let alexaEmit = (err) => {
      if (err) {
        awsIotClient.disconnect();
        return;
      }
      this.response.speak('ok');
      this.emit(':responseReady');
      awsIotClient.disconnect();
    };
    awsIotClient.connect(config.awsIoTConfigs).then(() => {
      awsIotClient.publish(YOUTUBE_TOPIC, {
        "skill": "next",
      }, {}, alexaEmit);
    });
  },
};

const previous_handler = {
  'LaunchRequest': function () {
    let alexaEmit = (err) => {
      if (err) {
        awsIotClient.disconnect();
        return;
      }
      this.response.speak('ok');
      this.emit(':responseReady');
      awsIotClient.disconnect();
    };
    awsIotClient.connect(config.awsIoTConfigs).then(() => {
      awsIotClient.publish(YOUTUBE_TOPIC, {
        "skill": "previous",
      }, {}, alexaEmit);
    });
  },
};

const choose_video_handler = {
  'LaunchRequest': function () {
    let alexaEmit = (err) => {
      if (err) {
        awsIotClient.disconnect();
        return;
      }
      this.response.speak('ok');
      this.emit(':responseReady');
      awsIotClient.disconnect();
    };
    awsIotClient.connect(config.awsIoTConfigs).then(() => {
      awsIotClient.publish(YOUTUBE_TOPIC, {
        "skill": "choose_video",
      }, {}, alexaEmit);
    });
  },
};

const pause_video_handler = {
  'LaunchRequest': function () {
    let alexaEmit = (err) => {
      if (err) {
        awsIotClient.disconnect();
        return;
      }
      this.response.speak('ok');
      this.emit(':responseReady');
      awsIotClient.disconnect();
    };
    awsIotClient.connect(config.awsIoTConfigs).then(() => {
      awsIotClient.publish(YOUTUBE_TOPIC, {
        "skill": "pause_video",
      }, {}, alexaEmit);
    });
  },
};

const resume_video_handler = {
  'LaunchRequest': function () {
    let alexaEmit = (err) => {
      if (err) {
        awsIotClient.disconnect();
        return;
      }
      this.response.speak('ok');
      this.emit(':responseReady');
      awsIotClient.disconnect();
    };
    awsIotClient.connect(config.awsIoTConfigs).then(() => {
      awsIotClient.publish(YOUTUBE_TOPIC, {
        "skill": "resume_video",
      }, {}, alexaEmit);
    });
  },
};

const close_video_handler = {
  'LaunchRequest': function () {
    let alexaEmit = (err) => {
      if (err) {
        awsIotClient.disconnect();
        return;
      }
      this.response.speak('ok');
      this.emit(':responseReady');
      awsIotClient.disconnect();
    };
    awsIotClient.connect(config.awsIoTConfigs).then(() => {
      awsIotClient.publish(YOUTUBE_TOPIC, {
        "skill": "close_video",
      }, {}, alexaEmit);
    });
  },
};

exports.handler = function (event, context, callback) {
  let currentHandler = null;
  let appID = '';
  let current_appID = '';
  if (event.request.type == 'IntentRequest') {
    current_appID = event.session.application.applicationId;
  }
  else {
    current_appID = event.context.System.application.applicationId;
  }
  switch (current_appID) {
    case config.appIDConfig.search_video_appID:
      currentHandler = search_video_handlers;
      appID = config.appIDConfig.search_video_appID;
      break;
    case config.appIDConfig.next_appID:
      currentHandler = next_handler;
      appID = config.appIDConfig.next_appID;
      break;
    case config.appIDConfig.previous_appID:
      currentHandler = previous_handler;
      appID = config.appIDConfig.previous_appID;
      break;
    case config.appIDConfig.choose_video_appID:
      currentHandler = choose_video_handler;
      appID = config.appIDConfig.choose_video_appID;
      break;
    case config.appIDConfig.pause_video_appID:
      currentHandler = pause_video_handler;
      appID = config.appIDConfig.pause_video_appID;
      break;
    case config.appIDConfig.resume_video_appID:
      currentHandler = resume_video_handler;
      appID = config.appIDConfig.resume_video_appID;
      break;
    case config.appIDConfig.close_video_appID:
      currentHandler = close_video_handler;
      appID = config.appIDConfig.close_video_appID;
      break;
    default:
      console.log('error app id not found');
      console.log(current_appID);
      break;
  }

  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = appID;
  alexa.registerHandlers(currentHandler);
  alexa.execute();
};