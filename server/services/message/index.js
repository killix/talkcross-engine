//
// Copyright (C) 2016 Changzhou TwistSnake Co.,Ltd
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

const AV = require('leanengine');
const path = require('path');
const hooks = require('./hooks');
const leanstorageService = require('../leanstorage');

module.exports = function () {
  const app = this;

  console.log(`leanstorage: ${leanstorageService}`);

  let messageObject = AV.Object.extend('Message');

  let options = {
    Model: messageObject,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/messages', leanstorageService(options));

  // Get our initialize service to that we can bind hooks
  const messageService = app.service('/messages');

  // Set up our before hooks
  messageService.before(hooks.before);

  // Set up our after hooks
  messageService.after(hooks.after);
};
