import {
    heightMax
} from './data.js'

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
            let x1, y1, s1,
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
            content,
            ptxt,
            txt
        i === 0 ? (content = '', txt = el[index + 2]) : (content = el[0] + '-' + el[1] + '：', txt = parseInt(el[index + 2]))
        ptxt = document.createTextNode(content + txt)
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
                let Item = parseInt(item)
                if (!isNaN(Item)) {
                    x += 50
                    //绘画圆点
                    ctx.beginPath()
                    ctx.arc(x + 0.5, h - Item / 2, 3, 0, 2 * Math.PI)
                    ctx.closePath()
                    ctx.fillStyle = colors[i - 1]
                    ctx.fill()
                    //绘画线条
                    ctx.beginPath()
                    ctx.moveTo(x + 0.5, h - Item / 2)
                    ctx.lineTo(x + 50.5, h - parseInt(el[n + 1]) / 2)
                    ctx.closePath()
                    ctx.strokeStyle = colors[i - 1]
                    ctx.stroke()
                }
            })
        }
    })
}

export {
    drawChart,
    drawBgColor,
    drawLineChart
}