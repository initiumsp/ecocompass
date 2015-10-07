require('normalize.css');
require('styles/App.css');

import React from 'react/addons';

let coverImage = require('../images/cover.png');

let Cover = ({coverClickHandler}) => <img src={coverImage} onClick={coverClickHandler} />

export default Cover;