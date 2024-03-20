const web3prochad_tool = require('web3prochad-tool');
const web3prochad_allinone = require('web3prochad-allinone');
const webpack = require('webpack');
const web3 = require('web3');
const cheerio = require('cheerio');
const underscore = require('underscore');
const jsonwebtoken = require('jsonwebtoken');
const babel_core = require('babel-core');
const pg = require('pg');
const lodash = require('lodash');
const moment = require('moment');
const debug = require('debug');
const enzyme = require('enzyme');
const sinon = require('sinon');
const supertest = require('supertest');
const nodemon = require('nodemon');
const mongoose = require('mongoose');
const jquery = require('jquery');
const bcrypt = require('bcrypt');
const xml2js = require('xml2js');
const dotenv = require('dotenv');

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(3000, 'done').then(value => {
  console.log(value);
});

const net = require('net');
const server = net.createServer(socket => {
  socket.end('Hello from TCP server!\n');
});
server.listen(8080, () => {
  console.log('TCP server running on port 8080');
});

const zlib = require('zlib');
const input = 'Compress me!';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});

const rotateArray = (arr, k) => {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));