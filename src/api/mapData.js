const axios = require("axios");

/**
 *  获取所有的点位信息
 */

export async function getAllData(id) {
    return await axios.get('/api/mapdata/' + id);
}

