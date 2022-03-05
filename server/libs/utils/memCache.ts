let cacheMap = new Map();
export class memCache {
    /**
     * @Description: 封装设置mem缓存的方法
     * @param key {String} key值
     * @param value {String} key的值
     * @param seconds {Number} 过期时间
     * @return: Promise<any>
     */
    set(key: string, value: any, seconds?: number) {
        console.log(`set key：${key},${new Date()}`);

        if (!seconds) {
            cacheMap.set(key, {
                value,
                time: 0,
            });
        } else {
            cacheMap.set(key, {
                value,
                time: new Date().getTime() + seconds * 1000,
            });
        }
    }

    /**
     * @Description: 设置获取mem缓存中的值
     * @param key {String}
     */
    get(key: string) {
        let data = cacheMap.get(key);
        console.log(`get key：${key}`);
        if (data?.time > new Date().getTime()) {
            return data['value'];
        }
        return undefined;
    }
    /**
     * @Description: 清空缓存
     * @param action {String} 操作来源
     */
    refresh(action: String) {
        cacheMap.clear()
        if(action=''){
            console.log(`清空缓存成功，操作来源:default,${new Date()}`);
        }
        console.log(`清空缓存成功，操作来源:${action},${new Date()}`);
    }
    map() {
        let ret: Array<Object> = []
        cacheMap.forEach(function (value, key) {
            ret.push({
                value,
                key
            })
        });
        return ret
        // return cacheMap
    }
}
export default new memCache();
