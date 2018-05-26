;
(function () {
    let sourceData = [{
            product: "手机",
            region: "华东",
            sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
        }, {
            product: "手机",
            region: "华北",
            sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
        }, {
            product: "手机",
            region: "华南",
            sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
        }, {
            product: "笔记本",
            region: "华东",
            sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
        }, {
            product: "笔记本",
            region: "华北",
            sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
        }, {
            product: "笔记本",
            region: "华南",
            sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
        }, {
            product: "智能音箱",
            region: "华东",
            sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
        }, {
            product: "智能音箱",
            region: "华北",
            sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
        }, {
            product: "智能音箱",
            region: "华南",
            sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
        }, {
            product: "键盘",
            region: "华东",
            sale: [150, 40, 15, 80, 40, 45, 26, 57, 35, 45, 234, 234]
        }, {
            product: "键盘",
            region: "华北",
            sale: [23, 40, 40, 26, 35, 66, 38, 75, 67, 63, 27, 26]
        }, {
            product: "键盘",
            region: "华南",
            sale: [24, 40, 40, 67, 45, 62, 84, 62, 64, 65, 73, 36]
        }],
        tableTop = ['商品', '地区', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        regionRadioWrapper = document.querySelector('#region-radio-wrapper'),
        productRadioWrapper = document.querySelector('#product-radio-wrapper'),
        radioWrapper = document.querySelector('#radio-wrapper'),
        tablewrapper = document.querySelector('#table-wrapper'),
        Table = document.querySelector('#table')

    //绘画选择按钮
    function drawCheckBox() {
        let drawCheckBoxList = []
        //得到绘制数组
        sourceData.forEach(function (el) {
            let len = drawCheckBoxList.length,
                product = el.product,
                region = el.region
            if (len === 0) {
                drawCheckBoxList.push([product], [region])
            } else {
                let isproduct = drawCheckBoxList[0].every(function (item) {
                    return item !== product
                })
                let isregion = drawCheckBoxList[1].every(function (item) {
                    return item !== region
                })
                if (isproduct) {
                    drawCheckBoxList[0].push(product)
                } else if (isregion) {
                    drawCheckBoxList[1].push(region)
                }
            }
        })
        //创建选项框
        function createCheckBox(el) {
            let checkBoxLi = document.createElement('li'),
                checkBoxLabel = document.createElement('label'),
                checkBoxInput = document.createElement('input'),
                checkBoxText = document.createTextNode(el)
            checkBoxInput.type = 'checkbox'
            checkBoxInput.value = el
            checkBoxInput.checked = true
            checkBoxLabel.appendChild(checkBoxInput)
            checkBoxLabel.appendChild(checkBoxText)
            checkBoxLi.appendChild(checkBoxLabel)
            return checkBoxLi
        }
        //渲染选项框
        drawCheckBoxList.forEach(function (el, index) {
            drawCheckBoxList[index].forEach(function (item) {
                let checkBoxLi = createCheckBox(item)
                index === 0 ? productRadioWrapper.appendChild(checkBoxLi) : regionRadioWrapper.appendChild(checkBoxLi)
            })
            //渲染全选按钮
            let checkBoxButton = document.createElement('button')
            checkBoxButton.value = '1'
            checkBoxButton.innerHTML = '全选/反选'
            index === 0 ? productRadioWrapper.appendChild(checkBoxButton) : regionRadioWrapper.appendChild(checkBoxButton)
        })
        // drawCheckBoxList[0].forEach(function (el) {
        //     let checkBoxLi = createCheckBox(el)
        //     productRadioWrapper.appendChild(checkBoxLi)
        // })
        // drawCheckBoxList[1].forEach(function (el) {
        //     let checkBoxLi = createCheckBox(el)
        //     regionRadioWrapper.appendChild(checkBoxLi)
        // })
    }

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
                checkBoxContent = document.createTextNode(num)
            checkBoxTd.appendChild(checkBoxContent)
            checkBoxTr.appendChild(checkBoxTd)
        })
        //插入表格
        Table.appendChild(checkBoxTr)
    }

    //全选事件
    function checkAll(e, checkall) {
        if (e.value === '1') {
            checkall.forEach(function (el) {
                el.checked = false
            })
            e.value = '2'
        } else if (e.value === '2') {
            checkall.forEach(function (el) {
                el.checked = true
            })
            e.value = '1'
        }
    }

    //合并单元格
    function mergeCell() {
        let allTr = document.querySelectorAll('tr'),
            rows = 1
        for (let i = 2; i <= allTr.length; i++) {
            if (i == allTr.length) {
                allTr[i - rows].firstChild.setAttribute('rowspan', rows)
                rows = 1
            } else if (allTr[i].firstChild.innerHTML == allTr[i - 1].firstChild.innerHTML) {
                rows++
            } else {
                allTr[i - rows].firstChild.setAttribute('rowspan', rows)
                rows = 1
            }
        }
        for (let i = 1; i < allTr.length; i++) {
            if (!allTr[i].children[0].getAttribute('rowspan')) {
                allTr[i].removeChild(allTr[i].children[0])
            }
        }
    }

    //添加事件
    radioWrapper.addEventListener('click', function () { // 因只需判断复选框有无勾选，所以不需绑定在input标签上
        drawTable()
        mergeCell()
    })
    productRadioWrapper.addEventListener('click', function (e) {
        let productValue = document.querySelectorAll('#product-radio-wrapper input')
        checkAll(e.target, productValue)
    })
    regionRadioWrapper.addEventListener('click', function (e) {
        let regionValue = document.querySelectorAll('#region-radio-wrapper input')
        checkAll(e.target, regionValue)
    })

    //初始化
    drawCheckBox()
    drawTable()
    mergeCell()

}())