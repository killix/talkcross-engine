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

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', serveStatic(app.get('public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware);

module.exports = app;

//
// import express from 'express'
// import timeout from 'connect-timeout'
// import path from 'path'
// import cookieParser from 'cookie-parser'
// import bodyParser from 'body-parser'
// import todos from './routes/todos'
// import AV from 'AV'
//
// const app = express();
//
// // 设置模板引擎
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(express.static('public'));
//
// // 设置默认超时时间
// app.use(timeout('15s'));
//
// // 加载云函数定义
// require('./cloud');
//
// // 加载云引擎中间件
// app.use(AV.express());
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
//
// // app.get('/', function(req, res) {
// //   res.render('index', { currentTime: new Date() });
// // });
//
// // 可以将一类的路由单独保存在一个文件中
// app.use('/todos', todos);
//
// app.use(function (req, res, next) {
//   // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器
//   if (!res.headersSent) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   }
// });
//
// // error handlers
// app.use(function (err, req, res, next) { // jshint ignore:line
//   var statusCode = err.status || 500;
//   if (statusCode === 500) {
//     console.error(err.stack || err);
//   }
//   if (req.timedout) {
//     console.error('请求超时: url=%s, timeout=%d, 请确认方法执行耗时很长，或没有正确的 response 回调。',
//       req.originalUrl, err.timeout);
//   }
//   res.status(statusCode);
//   // 默认不输出异常详情
//   var error = {};
//   if (app.get('env') === 'development') {
//     // 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
//     error = err;
//   }
//   res.render('error', {
//     message: err.message,
//     error: error
//   });
// });
//
// module.exports = app;
