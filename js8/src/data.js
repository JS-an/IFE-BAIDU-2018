//获得数据
function getSourceArr(t) {
    sourceArr = [] //清空数据
    let allTr = t || document.querySelectorAll('tr')
    if (t) {
        let tdCount = allTr.childElementCount
        sourceArr.push(tableTop)
        sourceArr.push([])
        tdCount !== 14 && sourceArr[1].push('商品/地区')
        for (let i = 0; i < tdCount; i++) {
            sourceArr[1].push(allTr.children[i].innerHTML)
        }
    } else {
        for (let i = 0; i < allTr.length; i++) {
            let count = allTr[i].childElementCount
            sourceArr.push([])
            for (let j = 0; j < count; j++) {
                sourceArr[i].push(allTr[i].children[j].innerHTML)
            }
        }
    }
}

//获取最大值设定高度
function heightMax() {
    let sourceMax = []
    sourceArr.forEach(function (el, i) {
        el.forEach(function (item) {
            !isNaN(item) && sourceMax.push(item)
        })
    })
    max = Math.max.apply(null, sourceMax)
    svg.setAttribute('height', max + 50)
    canvas.height = max / 2 + 30
}

export {
    getSourceArr,
    heightMax
}