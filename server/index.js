/**
 * Created by jianglu on 7/23/16.
 */

const app = require('./app');
const port = app.get('port');

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// AV 运行时会分配端口并赋值到该变量。
const serverPort = parseInt(process.env.LEANCLOUD_APP_PORT || port);

const server = app.listen(serverPort, function () {
  console.log('Node app is running, port:', serverPort);

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', function (err) {
    console.error("Caught exception:", err.stack);
  });
  process.on('unhandledRejection', function (reason, p) {
    console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
  });
});

server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);

module.exports = server;
