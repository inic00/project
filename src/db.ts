import { JSONFilePreset } from 'lowdb/node';

// 读取或创建db.json
const defaultData = { posts: [] };
const db = await JSONFilePreset('db.json', defaultData);


export default db;