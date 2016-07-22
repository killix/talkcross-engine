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

module.exports = (port, publicPath, callback) => {

  process.env.LEANCLOUD_APP_ID = '0x08VitFksfeN3orC1v9Eiif-gzGzoHsz';
  process.env.LEANCLOUD_APP_KEY = 'TLb63GxWqtXNMWagJpD9QBKS';
  process.env.LEANCLOUD_APP_MASTER_KEY = 'dXFEfjypF2rYNKYi0qBbcbTh';
  process.env.LEANCLOUD_APP_ENV = 'development';
  process.env.LEANCLOUD_APP_PORT = 3000;
  process.env.LEANCLOUD_APP_INSTANCE = 'staging';
  process.env.LEANCLOUD_REGION = 'CN';

  var path = require('path');
  var child_process = require('child_process');

  var server = child_process.spawn(
    './node_modules/.bin/nodemon',
    ['./server/index.js'],
    { cwd: __dirname });

  server.stdout.setEncoding('utf8');
  callback();

  server.stdout.on('data', function (data) {
    process.stdout.write(data);
  });

  server.stderr.on('data', function (data) {
    process.stdout.write(data);
  });

  return server;
};
