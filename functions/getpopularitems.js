const axios = require('axios');
require('dotenv').config();
const { GET_POPULAR_ITEMS } = require('./utils/queries.js');
const sendQuery = require('./utils/sendQuery.js')
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_POPULAR_ITEMS);
        const data = res.allPopularItemType.data;
        return formattedResponse(200, data);
    } catch(error) {
        console.log(error);
        return formattedResponse(500, {error: "Something went wrong."});
    }
};