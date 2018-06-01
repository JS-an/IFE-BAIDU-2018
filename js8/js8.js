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
            sale: [30, 35, 50, 70, 20, 15, 30, 50, 610, 130, 20, 20]
        }, {
            product: "笔记本",
            region: "华南",
            sale: [80, 120, 130, 140, 70, 75, 120, 90, 450, 120, 110, 100]
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
        }],
        colors = ['#60acfc', '#32d3eb', '#5bc49f', '#feb64d', '#ff7c7c', '#9287e7', '#84df57', '#aaef45', '#5b36ef'],
        tableTop = ['商品', '地区', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        warp = document.querySelector('.wrap'),
        regionRadioWrapper = document.querySelector('#region-radio-wrapper'),
        productRadioWrapper = document.querySelector('#product-radio-wrapper'),
        radioWrapper = document.querySelector('#radio-wrapper'),
        tablewrapper = document.querySelector('#table-wrapper'),
        Table = document.querySelector('#table'),
        chart = document.querySelector('.chart'),
        svg = document.querySelector('#svg'),
        mask = document.querySelector('.mask'),
        dark = document.querySelector('.dark'),
        canvas = document.querySelector('#canvas'),
        ctx = canvas.getContext('2d'),
        sourceArr = [],
        svgNode = 'http://www.w3.org/2000/svg',
        max

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
    }

    //全选按钮
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
            rows = 1,
            len = allTr.length
        for (let i = 2; i <= len; i++) {
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
        for (let i = 1; i < len; i++) {
            if (!allTr[i].children[0].getAttribute('rowspan')) {
                allTr[i].removeChild(allTr[i].children[0])
            }
        }
    }

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

    //绘制柱状图
    function drawChart() {
        svg.innerHTML = ''
        let x = 0,
            queuesFrist = -1,
            queuesSecond = -1,
            num = 0

        //执行函数
        heightMax()
        drawChartAxis()
        drawChartRect()
        drawRect()

        //绘制辨识格子
        function drawRect() {
            let isRect = [],
                isrectG = document.createElementNS(svgNode, 'g')
            sourceArr.forEach(function (el, i, arr) {
                let isRectValue = isRect.some(function (item) {
                    return item == el[1]
                })
                if (!isRectValue) {
                    isRect.push(el[1])
                }
            })
            for (let j = 1; j < isRect.length; j++) {
                let isrect = document.createElementNS(svgNode, 'rect'),
                    isrectText = document.createElementNS(svgNode, 'text')
                isrectText.innerHTML = isRect[j]
                isrectText.setAttribute('x', j * 100 + 40 + 'px')
                isrectText.setAttribute('y', '10px')
                isrectText.setAttribute('style', 'fill:' + colors[j - 1] + ';font-size:12px;')
                isrect.setAttribute('x', j * 100 + 'px')
                isrect.setAttribute('y', '0px')
                isrect.setAttribute('rx', '3px')
                isrect.setAttribute('ry', '3px')
                isrect.setAttribute('width', '30px')
                isrect.setAttribute('height', '10px')
                isrect.setAttribute('style', 'fill:' + colors[j - 1])
                isrectG.appendChild(isrectText)
                isrectG.appendChild(isrect)
            }
            svg.appendChild(isrectG)

        }

        //绘制轴线
        function drawChartAxis() {
            let lineG = document.createElementNS(svgNode, 'g')
            for (let i = 0; i < 13; i++) {
                let x1, y1,
                    lineX = document.createElementNS(svgNode, 'line'),
                    textSale = document.createElementNS(svgNode, 'text'),
                    lineY = document.createElementNS(svgNode, 'line'),
                    textMonth = document.createElementNS(svgNode, 'text')
                //有两种样式的线条
                i === 0 ? (x1 = 25, y1 = 0, s1 = 'stroke-width:2;stroke:rgb(0,0,0);') : (x1 = i * 116 + 25, y1 = max, s1 = 'stroke-width:1;stroke:rgb(200,200,200);');
                //月份
                textMonth.innerHTML = sourceArr[0][i + 2]
                textMonth.setAttribute('fill', '#000')
                textMonth.setAttribute('x', (i + 1) * 116 - 45)
                textMonth.setAttribute('y', max + 20)
                lineG.appendChild(textMonth)
                //销量
                textSale.innerHTML = i * 100
                textSale.setAttribute('fill', '#000')
                textSale.setAttribute('x', '3')
                textSale.setAttribute('y', max + 4 - i * 100)
                lineG.appendChild(textSale)
                //横轴
                lineX.setAttribute('x1', '26')
                lineX.setAttribute('y1', max - 1 - i * 100)
                lineX.setAttribute('x2', '100%')
                lineX.setAttribute('y2', max - 1 - i * 100)
                lineX.setAttribute('style', s1)
                lineG.appendChild(lineX)
                //纵轴
                lineY.setAttribute('x1', x1)
                lineY.setAttribute('y1', y1)
                lineY.setAttribute('x2', x1)
                lineY.setAttribute('y2', max + 4)
                lineY.setAttribute('style', 'stroke-width:2;stroke:rgb(0,0,0);')
                lineG.appendChild(lineY)
            }
            svg.appendChild(lineG)
        }

        //绘制柱子
        function drawChartRect() {
            let rectG = document.createElementNS(svgNode, 'g')
            rectG.setAttribute('class', 'late')
            for (let i = 1; i < sourceArr.length; i++) {
                let count = sourceArr[i].length,
                    txt1 = sourceArr[i][0],
                    txtbefore1 = sourceArr[i - 1][0]
                txt1 !== txtbefore1 && (queuesFrist++, num = 0); //隔开第一项的间隔
                queuesSecond++ //调整每月开始绘制的起点
                x = queuesSecond * 10 + queuesFrist * 5
                if (i === 1) {
                    for (let k = 0; k < 12; k++) {
                        let monthG = document.createElementNS(svgNode, 'g')
                        rectG.appendChild(monthG)
                    }
                }
                for (let j = 0; j < count; j++) {
                    let txt = parseInt(sourceArr[i][j])
                    if (!isNaN(txt)) {
                        let rect = document.createElementNS(svgNode, 'rect')
                        rect.setAttribute('x', x)
                        rect.setAttribute('y', max - 2 - txt)
                        rect.setAttribute('width', '10')
                        rect.setAttribute('height', txt)
                        rect.setAttribute('style', 'fill:' + colors[num])
                        rectG.children[j - 2].appendChild(rect)
                        x += 116 // 隔开每个月的对应的距离
                    }
                }
                num++ //改变颜色
            }
            svg.appendChild(rectG)
        }
    }

    //呈现月份背景与详细信息
    function drawBgColor(e) {
        dark.innerHTML = ''
        //位置
        let x = e.pageX,
            y = e.pageY,
            chartx = x - chart.offsetLeft,
            charty = y - chart.offsetTop,
            index = Math.floor((x - 20) / 116)
        if (index >= 0 && index < 12 && charty < max && charty > 0) {
            //月份遮罩层
            mask.setAttribute('style', 'height:' + (max - 2) + 'px;left:' + (index * 116 + 25) + 'px;')
            //详细信息位置跟随
            index > 5 ? dark.setAttribute('style', 'top:' + charty + 'px;left:' + (chartx - 150) + 'px;display:block;') : dark.setAttribute('style', 'top:' + charty + 'px;left:' + chartx + 'px;display:block;')
        } else {
            mask.style.display = 'none'
            dark.style.display = 'none'
        }
        //添加详细信息
        sourceArr.forEach(function (el, i) {
            let p = document.createElement('p'),
                content
            i === 0 ? content = '' : content = el[0] + '-' + el[1] + '：'
            let ptxt = document.createTextNode(content + el[index + 2])
            p.appendChild(ptxt)
            dark.appendChild(p)
        })
    }

    //绘画折线图
    function drawLineChart() {
        let cWidth = 50 * sourceArr[0].length,
            x = 0,
            y = 0,
            h = max / 2 + 5
        canvas.width = cWidth
        //绘画轴线
        sourceArr.forEach(function (el, i, arr) {
            if (i === 0) {
                //绘画横轴
                el.forEach(function (item, j) {
                    if (j > 1) {
                        j > 2 ? y = h : y = 0
                        x += 50
                        ctx.moveTo(x + 0.5, y) //加0.5是为了让线条变为1px（因canvas有中线，1px的线会向两侧延伸，计算机默认渲染成2PX）
                        ctx.lineTo(x + 0.5, h + 4)
                        ctx.stroke()
                        ctx.fillText(item, x - 10, h + 20) //添加月份
                    }
                })
                //绘画纵线
                let kNum = Math.ceil(max / 100) //得到绘画纵线的条数
                y = 0
                for (let k = 0; k < kNum; k++) {
                    ctx.moveTo(46, h - y + 0.5)
                    ctx.lineTo(cWidth, h - y + 0.5)
                    ctx.stroke()
                    ctx.fillText(k * 100, 26, h + 4 - y) //添加销量
                    y += 50
                }
            } else { //绘画数据
                x = 0
                el.forEach(function (item, n) {
                    if (!isNaN(item)) {
                        x += 50
                        //绘画圆点
                        ctx.beginPath()
                        ctx.arc(x + 0.5, h - item / 2, 3, 0, 2 * Math.PI)
                        ctx.closePath()
                        ctx.fillStyle = colors[i - 1]
                        ctx.fill()
                        //绘画线条
                        ctx.beginPath()
                        ctx.moveTo(x + 0.5, h - item / 2)
                        ctx.lineTo(x + 50.5, h - el[n + 1] / 2)
                        ctx.closePath()
                        ctx.strokeStyle = colors[i - 1]
                        ctx.stroke()
                    }
                })
            }
        })
    }

    //初始化
    drawCheckBox()
    drawTable()
    getSourceArr()
    drawChart()
    drawLineChart()
    mergeCell()

    //添加事件
    radioWrapper.addEventListener('click', function () { // 因只需判断复选框有无勾选，所以不需绑定在input标签上
        drawTable()
        getSourceArr()
        drawChart()
        drawLineChart()
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
    warp.addEventListener('mousemove', function (e) {
        drawBgColor(e)
    })
    Table.addEventListener('mouseover', function (e) {
        getSourceArr(e.target.parentNode)
        drawChart()
        drawLineChart()
    })

}())