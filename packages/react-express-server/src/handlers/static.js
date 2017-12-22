import express from 'express';

export default () => express.static(...Array.from(arguments));
