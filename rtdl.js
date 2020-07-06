function findMoreThanHalf(arr) {
    // your code are here...
    for (var i = 0; i < arr.length; i++) {

    }
}


/*拆解URL参数中queryString，返回一个 key - value 形式的 object*/
function querySearch(url) {
    // your code are here...
    let params = {};
    let arr = url.split("?");
    if (arr.length <= 1) {
        return params;
    } else {
        if (arr[1].includes('#')) {
            arr[1] = arr[1].split('#')[0]
        }
        arr = arr[1].split("&");
        arr.forEach((item) => {
            let tmp = item.split("=");
            params[tmp[0]] = tmp[1] || ''
        })
        return params;
    }
}

querySearch('http://sample.com/?a=1&b=2&c=xx&d#hash')


/* 可以将数组转化为树状数据结构，要求程序具有侦测错误输入的能力*/
function buildTree(arr) {
    let obj = {}
    arr.forEach((item) => {
        if (!item.parentId) {
            obj = item
        }
    })
    let findChild = function (arr, obj) {
        obj.children = []
        arr.forEach((item) => {
            if (item.parentId === obj.id) {
                let tmp = {
                    id: item.id,
                    name: item.name,
                }
                tmp = findChild(arr, tmp)
                obj.children.push(tmp)
            }
        })
        return obj
    }
    return findChild(arr, obj)
}



/**
 * 返回最接近输入值的数字，如果有多个，返回最大的那个
 * @param {number} n
 * @return {number}
 */
function findNext(n, arr) {
    let findIndex = 0
    let tmp = Math.abs(arr[0] - n)

    for (let i = 0; i < arr.length; i++) {
        if (tmp >= Math.abs(arr[i] - n)) {
            tmp = Math.abs(arr[i] - n)
            findIndex = i
        }
    }
    return arr[findIndex]
}
findNext(44,[1, 5, 9, 15, 28, 33, 55, 78, 99])