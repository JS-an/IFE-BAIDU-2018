;
import {
    drawCheckBox,
    checkAll
} from './checkbox.js'
import {
    drawChart,
    drawBgColor,
    drawLineChart
} from './draw.js'
import {
    drawTable,
    mergeCell
} from './table'
import {
    getSourceArr,
    heightMax
} from './data'
import {
    editData
} from './editdata'

(function () {
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
    Table.addEventListener('dblclick', function (e) {
        editData(e)
    })
}())