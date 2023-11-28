const express = require('express');
const app = express()
const morgan = require('morgan');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

if(app.get('env')=='development'){
    morgan('tiny');

    startupDebugger('Morgan enabled ...')
}

//some db work
dbDebugger('Connected to database..')