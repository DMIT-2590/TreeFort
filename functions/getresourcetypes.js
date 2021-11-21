const axios = require('axios');
require('dotenv').config();
const { GET_RESOURCE_TYPES } = require('./utils/queries.js');
const sendQuery = require('./utils/sendQuery.js')
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_RESOURCE_TYPES);
        const data = res.allResourceType.data;
        return formattedResponse(200, data);
    } catch(error) {
        console.log(error);
        return formattedResponse(500, {error: "Something went wrong."});
    }
};