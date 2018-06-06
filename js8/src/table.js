//绘制表格
function drawTable() {
    Table.innerHTML = '' //重置表格
    let values = getValue()
    //判定渲染表格
    sourceData.forEach(function (el, index) {
        let isProductValue = values[0].some(function (item) {
            return item === el.product
        })
        let isRegionValue = values[1].some(function (item) {
            return item === el.region
        })
        if (isProductValue && isRegionValue && values[1].length === 1 && values[0].length > 1) { //地区放在第一列
            order(0)
            addLabel(el, el.region, el.product)
        } else if (isProductValue && values[1].length === 0) { //地区项为0时，默认看地区项的全部
            order(1)
            addLabel(el, el.product, el.region)
        } else if (isRegionValue && values[0].length === 0) { //同上
            order(1)
            addLabel(el, el.product, el.region)
        } else if (isProductValue && isRegionValue) {
            order(1)
            addLabel(el, el.product, el.region)
        }
    })
    //渲染表头
    let checkBoxTrTop = document.createElement('tr')
    tableTop.forEach(function (elTop) {
        let checkBoxThTop = document.createElement('th'),
            checkBoxTextTop = document.createTextNode(elTop)
        checkBoxThTop.appendChild(checkBoxTextTop)
        checkBoxTrTop.appendChild(checkBoxThTop)
    })
    Table.insertBefore(checkBoxTrTop, Table.children[0])
    //改变表头排序
    function order(plan) {
        plan === 0 ? (tableTop[0] = '地区', tableTop[1] = '商品') : (tableTop[0] = '商品', tableTop[1] = '地区')
    }

    //获得选中的选择框
    function getValue() {
        let productValue = document.querySelectorAll('#product-radio-wrapper input'),
            regionValue = document.querySelectorAll('#region-radio-wrapper input'),
            values = [
                [],
                []
            ]
        productValue.forEach(function (el) {
            el.checked && values[0].push(el.value)
        })
        regionValue.forEach(function (el) {
            el.checked && values[1].push(el.value)
        })
        return values
    }

    //渲染表格
    function addLabel(el, order1, order2) {
        //渲染商品和地区顺序
        let checkBoxTr = document.createElement('tr'),
            checkBoxProductTd = document.createElement('td'),
            checkBoxProductContent = document.createTextNode(order1)
        checkBoxProductTd.appendChild(checkBoxProductContent)
        checkBoxTr.appendChild(checkBoxProductTd)
        let checkBoxRegionTd = document.createElement('td'),
            checkBoxRegionContent = document.createTextNode(order2)
        checkBoxRegionTd.appendChild(checkBoxRegionContent)
        checkBoxTr.appendChild(checkBoxRegionTd)
        //渲染销量
        el.sale.forEach(function (num) {
            let checkBoxTd = document.createElement('td'),
                checkBoxContent = document.createTextNode(num),
                checkBoxEdit = document.createElement('span')
            checkBoxEdit.innerHTML = '编辑'
            checkBoxTd.appendChild(checkBoxContent)
            checkBoxTd.appendChild(checkBoxEdit)
            checkBoxTr.appendChild(checkBoxTd)
        })
        //插入表格
        Table.appendChild(checkBoxTr)
    }
}

//合并单元格
function mergeCell() {
    let allTr = document.querySelectorAll('tr'),
        rows = 1,
        len = allTr.length
    for (let i = 2; i <= len; i++) {
        if (i == len) {
            allTr[i - rows].firstChild.setAttribute('rowspan', rows)
            rows = 1
        } else if (allTr[i].firstChild.innerHTML == allTr[i - 1].firstChild.innerHTML) {
            rows++
        } else {
            allTr[i - rows].firstChild.setAttribute('rowspan', rows)
            rows = 1
        }
    }
    for (let i = 1; i < len; i++) {
        if (!allTr[i].children[0].getAttribute('rowspan')) {
            allTr[i].children[0].style.display = 'none'
        }
    }
}

export {
    drawTable,
    mergeCell
}