// используем npm.im/debug вместо консольлогов
const debug = require("debug")("erodionov:server");
const express = require("express");
const path = require("path");

// импортим нашу функцию
// const handleRenderReactApp = require("./reactApp");
const handleRenderReactApp = "test";

const server = express();

// достаём HOST и PORT энв-параметрами
// если их нет — ставим дефолтные значения
const { HOST = "127.0.0.1", PORT = 8080 } = process.env;

// статикой раздаём директорию `build`
// для картинок и прочего
// и выключаем через { index: false } использование
// файла build/index.html
// иначе Экспресс будет отдавать его на /
server.use(
  express.static(path.resolve(__dirname, "..", "build"), { index: true })
);

// на любой запрос вызываем функцию handleRenderReactApp
// server.get("/*", handleRenderReactApp);

server.listen(PORT, HOST, () => debug(`app started at ${HOST}:${PORT}`));
