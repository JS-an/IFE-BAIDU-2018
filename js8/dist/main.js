/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/checkbox.js":
/*!*************************!*\
  !*** ./src/checkbox.js ***!
  \*************************/
/*! exports provided: drawCheckBox, checkAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawCheckBox\", function() { return drawCheckBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkAll\", function() { return checkAll; });\n //绘画选择按钮\r\n function drawCheckBox() {\r\n     let drawCheckBoxList = []\r\n     //得到绘制数组\r\n     sourceData.forEach(function (el) {\r\n         let len = drawCheckBoxList.length,\r\n             product = el.product,\r\n             region = el.region\r\n         if (len === 0) {\r\n             drawCheckBoxList.push([product], [region])\r\n         } else {\r\n             let isproduct = drawCheckBoxList[0].every(function (item) {\r\n                 return item !== product\r\n             })\r\n             let isregion = drawCheckBoxList[1].every(function (item) {\r\n                 return item !== region\r\n             })\r\n             if (isproduct) {\r\n                 drawCheckBoxList[0].push(product)\r\n             } else if (isregion) {\r\n                 drawCheckBoxList[1].push(region)\r\n             }\r\n         }\r\n     })\r\n     //创建选项框\r\n     function createCheckBox(el) {\r\n         let checkBoxLi = document.createElement('li'),\r\n             checkBoxLabel = document.createElement('label'),\r\n             checkBoxInput = document.createElement('input'),\r\n             checkBoxText = document.createTextNode(el)\r\n         checkBoxInput.type = 'checkbox'\r\n         checkBoxInput.value = el\r\n         checkBoxInput.checked = true\r\n         checkBoxLabel.appendChild(checkBoxInput)\r\n         checkBoxLabel.appendChild(checkBoxText)\r\n         checkBoxLi.appendChild(checkBoxLabel)\r\n         return checkBoxLi\r\n     }\r\n     //渲染选项框\r\n     drawCheckBoxList.forEach(function (el, index) {\r\n         drawCheckBoxList[index].forEach(function (item) {\r\n             let checkBoxLi = createCheckBox(item)\r\n             index === 0 ? productRadioWrapper.appendChild(checkBoxLi) : regionRadioWrapper.appendChild(checkBoxLi)\r\n         })\r\n         //渲染全选按钮\r\n         let checkBoxButton = document.createElement('button')\r\n         checkBoxButton.value = '1'\r\n         checkBoxButton.innerHTML = '全选/反选'\r\n         index === 0 ? productRadioWrapper.appendChild(checkBoxButton) : regionRadioWrapper.appendChild(checkBoxButton)\r\n     })\r\n }\r\n\r\n //全选按钮\r\n function checkAll(e, checkall) {\r\n     if (e.value === '1') {\r\n         checkall.forEach(function (el) {\r\n             el.checked = false\r\n         })\r\n         e.value = '2'\r\n     } else if (e.value === '2') {\r\n         checkall.forEach(function (el) {\r\n             el.checked = true\r\n         })\r\n         e.value = '1'\r\n     }\r\n }\r\n\r\n \n\n//# sourceURL=webpack:///./src/checkbox.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: getSourceArr, heightMax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSourceArr\", function() { return getSourceArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"heightMax\", function() { return heightMax; });\n//获得数据\r\nfunction getSourceArr(t) {\r\n    sourceArr = [] //清空数据\r\n    let allTr = t || document.querySelectorAll('tr')\r\n    if (t) {\r\n        let tdCount = allTr.childElementCount\r\n        sourceArr.push(tableTop)\r\n        sourceArr.push([])\r\n        tdCount !== 14 && sourceArr[1].push('商品/地区')\r\n        for (let i = 0; i < tdCount; i++) {\r\n            sourceArr[1].push(allTr.children[i].innerHTML)\r\n        }\r\n    } else {\r\n        for (let i = 0; i < allTr.length; i++) {\r\n            let count = allTr[i].childElementCount\r\n            sourceArr.push([])\r\n            for (let j = 0; j < count; j++) {\r\n                sourceArr[i].push(allTr[i].children[j].innerHTML)\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n//获取最大值设定高度\r\nfunction heightMax() {\r\n    let sourceMax = []\r\n    sourceArr.forEach(function (el, i) {\r\n        el.forEach(function (item) {\r\n            !isNaN(item) && sourceMax.push(item)\r\n        })\r\n    })\r\n    max = Math.max.apply(null, sourceMax)\r\n    svg.setAttribute('height', max + 50)\r\n    canvas.height = max / 2 + 30\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/*! exports provided: drawChart, drawBgColor, drawLineChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawChart\", function() { return drawChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawBgColor\", function() { return drawBgColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawLineChart\", function() { return drawLineChart; });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\r\n\r\n//绘制柱状图\r\nfunction drawChart() {\r\n    svg.innerHTML = ''\r\n    let x = 0,\r\n        queuesFrist = -1,\r\n        queuesSecond = -1,\r\n        num = 0\r\n\r\n    //执行函数\r\n    Object(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"heightMax\"])()\r\n    drawChartAxis()\r\n    drawChartRect()\r\n    drawRect()\r\n\r\n    //绘制辨识格子\r\n    function drawRect() {\r\n        let isRect = [],\r\n            isrectG = document.createElementNS(svgNode, 'g')\r\n        sourceArr.forEach(function (el, i, arr) {\r\n            let isRectValue = isRect.some(function (item) {\r\n                return item == el[1]\r\n            })\r\n            if (!isRectValue) {\r\n                isRect.push(el[1])\r\n            }\r\n        })\r\n        for (let j = 1; j < isRect.length; j++) {\r\n            let isrect = document.createElementNS(svgNode, 'rect'),\r\n                isrectText = document.createElementNS(svgNode, 'text')\r\n            isrectText.innerHTML = isRect[j]\r\n            isrectText.setAttribute('x', j * 100 + 40 + 'px')\r\n            isrectText.setAttribute('y', '10px')\r\n            isrectText.setAttribute('style', 'fill:' + colors[j - 1] + ';font-size:12px;')\r\n            isrect.setAttribute('x', j * 100 + 'px')\r\n            isrect.setAttribute('y', '0px')\r\n            isrect.setAttribute('rx', '3px')\r\n            isrect.setAttribute('ry', '3px')\r\n            isrect.setAttribute('width', '30px')\r\n            isrect.setAttribute('height', '10px')\r\n            isrect.setAttribute('style', 'fill:' + colors[j - 1])\r\n            isrectG.appendChild(isrectText)\r\n            isrectG.appendChild(isrect)\r\n        }\r\n        svg.appendChild(isrectG)\r\n    }\r\n\r\n    //绘制轴线\r\n    function drawChartAxis() {\r\n        let lineG = document.createElementNS(svgNode, 'g')\r\n        for (let i = 0; i < 13; i++) {\r\n            let x1, y1, s1,\r\n                lineX = document.createElementNS(svgNode, 'line'),\r\n                textSale = document.createElementNS(svgNode, 'text'),\r\n                lineY = document.createElementNS(svgNode, 'line'),\r\n                textMonth = document.createElementNS(svgNode, 'text')\r\n            //有两种样式的线条\r\n            i === 0 ? (x1 = 25, y1 = 0, s1 = 'stroke-width:2;stroke:rgb(0,0,0);') : (x1 = i * 116 + 25, y1 = max, s1 = 'stroke-width:1;stroke:rgb(200,200,200);');\r\n            //月份\r\n            textMonth.innerHTML = sourceArr[0][i + 2]\r\n            textMonth.setAttribute('fill', '#000')\r\n            textMonth.setAttribute('x', (i + 1) * 116 - 45)\r\n            textMonth.setAttribute('y', max + 20)\r\n            lineG.appendChild(textMonth)\r\n            //销量\r\n            textSale.innerHTML = i * 100\r\n            textSale.setAttribute('fill', '#000')\r\n            textSale.setAttribute('x', '3')\r\n            textSale.setAttribute('y', max + 4 - i * 100)\r\n            lineG.appendChild(textSale)\r\n            //横轴\r\n            lineX.setAttribute('x1', '26')\r\n            lineX.setAttribute('y1', max - 1 - i * 100)\r\n            lineX.setAttribute('x2', '100%')\r\n            lineX.setAttribute('y2', max - 1 - i * 100)\r\n            lineX.setAttribute('style', s1)\r\n            lineG.appendChild(lineX)\r\n            //纵轴\r\n            lineY.setAttribute('x1', x1)\r\n            lineY.setAttribute('y1', y1)\r\n            lineY.setAttribute('x2', x1)\r\n            lineY.setAttribute('y2', max + 4)\r\n            lineY.setAttribute('style', 'stroke-width:2;stroke:rgb(0,0,0);')\r\n            lineG.appendChild(lineY)\r\n        }\r\n        svg.appendChild(lineG)\r\n    }\r\n\r\n    //绘制柱子\r\n    function drawChartRect() {\r\n        let rectG = document.createElementNS(svgNode, 'g')\r\n        rectG.setAttribute('class', 'late')\r\n        for (let i = 1; i < sourceArr.length; i++) {\r\n            let count = sourceArr[i].length,\r\n                txt1 = sourceArr[i][0],\r\n                txtbefore1 = sourceArr[i - 1][0]\r\n            txt1 !== txtbefore1 && (queuesFrist++, num = 0); //隔开第一项的间隔\r\n            queuesSecond++ //调整每月开始绘制的起点\r\n            x = queuesSecond * 10 + queuesFrist * 5\r\n            if (i === 1) {\r\n                for (let k = 0; k < 12; k++) {\r\n                    let monthG = document.createElementNS(svgNode, 'g')\r\n                    rectG.appendChild(monthG)\r\n                }\r\n            }\r\n            for (let j = 0; j < count; j++) {\r\n                let txt = parseInt(sourceArr[i][j])\r\n                if (!isNaN(txt)) {\r\n                    let rect = document.createElementNS(svgNode, 'rect')\r\n                    rect.setAttribute('x', x)\r\n                    rect.setAttribute('y', max - 2 - txt)\r\n                    rect.setAttribute('width', '10')\r\n                    rect.setAttribute('height', txt)\r\n                    rect.setAttribute('style', 'fill:' + colors[num])\r\n                    rectG.children[j - 2].appendChild(rect)\r\n                    x += 116 // 隔开每个月的对应的距离\r\n                }\r\n            }\r\n            num++ //改变颜色\r\n        }\r\n        svg.appendChild(rectG)\r\n    }\r\n}\r\n\r\n//呈现月份背景与详细信息\r\nfunction drawBgColor(e) {\r\n    dark.innerHTML = ''\r\n    //位置\r\n    let x = e.pageX,\r\n        y = e.pageY,\r\n        chartx = x - chart.offsetLeft,\r\n        charty = y - chart.offsetTop,\r\n        index = Math.floor((x - 20) / 116)\r\n    if (index >= 0 && index < 12 && charty < max && charty > 0) {\r\n        //月份遮罩层\r\n        mask.setAttribute('style', 'height:' + (max - 2) + 'px;left:' + (index * 116 + 25) + 'px;')\r\n        //详细信息位置跟随\r\n        index > 5 ? dark.setAttribute('style', 'top:' + charty + 'px;left:' + (chartx - 150) + 'px;display:block;') : dark.setAttribute('style', 'top:' + charty + 'px;left:' + chartx + 'px;display:block;')\r\n    } else {\r\n        mask.style.display = 'none'\r\n        dark.style.display = 'none'\r\n    }\r\n    //添加详细信息\r\n    sourceArr.forEach(function (el, i) {\r\n        let p = document.createElement('p'),\r\n            content\r\n        i === 0 ? content = '' : content = el[0] + '-' + el[1] + '：'\r\n        let ptxt = document.createTextNode(content + el[index + 2])\r\n        p.appendChild(ptxt)\r\n        dark.appendChild(p)\r\n    })\r\n}\r\n\r\n//绘画折线图\r\nfunction drawLineChart() {\r\n    let cWidth = 50 * sourceArr[0].length,\r\n        x = 0,\r\n        y = 0,\r\n        h = max / 2 + 5\r\n    canvas.width = cWidth\r\n    //绘画轴线\r\n    sourceArr.forEach(function (el, i, arr) {\r\n        if (i === 0) {\r\n            //绘画横轴\r\n            el.forEach(function (item, j) {\r\n                if (j > 1) {\r\n                    j > 2 ? y = h : y = 0\r\n                    x += 50\r\n                    ctx.moveTo(x + 0.5, y) //加0.5是为了让线条变为1px（因canvas有中线，1px的线会向两侧延伸，计算机默认渲染成2PX）\r\n                    ctx.lineTo(x + 0.5, h + 4)\r\n                    ctx.stroke()\r\n                    ctx.fillText(item, x - 10, h + 20) //添加月份\r\n                }\r\n            })\r\n            //绘画纵线\r\n            let kNum = Math.ceil(max / 100) //得到绘画纵线的条数\r\n            y = 0\r\n            for (let k = 0; k < kNum; k++) {\r\n                ctx.moveTo(46, h - y + 0.5)\r\n                ctx.lineTo(cWidth, h - y + 0.5)\r\n                ctx.stroke()\r\n                ctx.fillText(k * 100, 26, h + 4 - y) //添加销量\r\n                y += 50\r\n            }\r\n        } else { //绘画数据\r\n            x = 0\r\n            el.forEach(function (item, n) {\r\n                if (!isNaN(item)) {\r\n                    x += 50\r\n                    //绘画圆点\r\n                    ctx.beginPath()\r\n                    ctx.arc(x + 0.5, h - item / 2, 3, 0, 2 * Math.PI)\r\n                    ctx.closePath()\r\n                    ctx.fillStyle = colors[i - 1]\r\n                    ctx.fill()\r\n                    //绘画线条\r\n                    ctx.beginPath()\r\n                    ctx.moveTo(x + 0.5, h - item / 2)\r\n                    ctx.lineTo(x + 50.5, h - el[n + 1] / 2)\r\n                    ctx.closePath()\r\n                    ctx.strokeStyle = colors[i - 1]\r\n                    ctx.stroke()\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/draw.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ \"./src/checkbox.js\");\n/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.js */ \"./src/draw.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ \"./src/table.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n;\r\n\r\n\r\n\r\n\r\n(function () {\r\n    //初始化\r\n    Object(_checkbox_js__WEBPACK_IMPORTED_MODULE_0__[\"drawCheckBox\"])()\r\n    Object(_table__WEBPACK_IMPORTED_MODULE_2__[\"drawTable\"])()\r\n    Object(_data__WEBPACK_IMPORTED_MODULE_3__[\"getSourceArr\"])()\r\n    Object(_draw_js__WEBPACK_IMPORTED_MODULE_1__[\"drawChart\"])()\r\n    Object(_draw_js__WEBPACK_IMPORTED_MODULE_1__[\"drawLineChart\"])()\r\n    Object(_table__WEBPACK_IMPORTED_MODULE_2__[\"mergeCell\"])()\r\n\r\n    //添加事件\r\n    radioWrapper.addEventListener('click', function () { // 因只需判断复选框有无勾选，所以不需绑定在input标签上\r\n        Object(_table__WEBPACK_IMPORTED_MODULE_2__[\"drawTable\"])()\r\n        Object(_data__WEBPACK_IMPORTED_MODULE_3__[\"getSourceArr\"])()\r\n        Object(_draw_js__WEBPACK_IMPORTED_MODULE_1__[\"drawChart\"])()\r\n        Object(_draw_js__WEBPACK_IMPORTED_MODULE_1__[\"drawLineChart\"])()\r\n        Object(_table__WEBPACK_IMPORTED_MODULE_2__[\"mergeCell\"])()\r\n    })\r\n    productRadioWrapper.addEventListener('click', function (e) {\r\n        let productValue = document.querySelectorAll('#product-radio-wrapper input')\r\n        Object(_checkbox_js__WEBPACK_IMPORTED_MODULE_0__[\"checkAll\"])(e.target, productValue)\r\n    })\r\n    regionRadioWrapper.addEventListener('click', function (e) {\r\n        let regionValue = document.querySelectorAll('#region-radio-wrapper input')\r\n        Object(_checkbox_js__WEBPACK_IMPORTED_MODULE_0__[\"checkAll\"])(e.target, regionValue)\r\n    })\r\n    warp.addEventListener('mousemove', function (e) {\r\n        Object(_draw_js__WEBPACK_IMPORTED_MODULE_1__[\"drawBgColor\"])(e)\r\n    })\r\n    Table.addEventListener('mouseover', function (e) {\r\n        Object(_data__WEBPACK_IMPORTED_MODULE_3__[\"getSourceArr\"])(e.target.parentNode)\r\n        Object(_draw_js__WEBPACK_IMPORTED_MODULE_1__[\"drawChart\"])()\r\n        Object(_draw_js__WEBPACK_IMPORTED_MODULE_1__[\"drawLineChart\"])()\r\n    })\r\n}())\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/*! exports provided: drawTable, mergeCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawTable\", function() { return drawTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeCell\", function() { return mergeCell; });\n//绘制表格\r\nfunction drawTable() {\r\n    Table.innerHTML = '' //重置表格\r\n    let values = getValue()\r\n    //判定渲染表格\r\n    sourceData.forEach(function (el, index) {\r\n        let isProductValue = values[0].some(function (item) {\r\n            return item === el.product\r\n        })\r\n        let isRegionValue = values[1].some(function (item) {\r\n            return item === el.region\r\n        })\r\n        if (isProductValue && isRegionValue && values[1].length === 1 && values[0].length > 1) { //地区放在第一列\r\n            order(0)\r\n            addLabel(el, el.region, el.product)\r\n        } else if (isProductValue && values[1].length === 0) { //地区项为0时，默认看地区项的全部\r\n            order(1)\r\n            addLabel(el, el.product, el.region)\r\n        } else if (isRegionValue && values[0].length === 0) { //同上\r\n            order(1)\r\n            addLabel(el, el.product, el.region)\r\n        } else if (isProductValue && isRegionValue) {\r\n            order(1)\r\n            addLabel(el, el.product, el.region)\r\n        }\r\n    })\r\n    //渲染表头\r\n    let checkBoxTrTop = document.createElement('tr')\r\n    tableTop.forEach(function (elTop) {\r\n        let checkBoxThTop = document.createElement('th'),\r\n            checkBoxTextTop = document.createTextNode(elTop)\r\n        checkBoxThTop.appendChild(checkBoxTextTop)\r\n        checkBoxTrTop.appendChild(checkBoxThTop)\r\n    })\r\n    Table.insertBefore(checkBoxTrTop, Table.children[0])\r\n    //改变表头排序\r\n    function order(plan) {\r\n        plan === 0 ? (tableTop[0] = '地区', tableTop[1] = '商品') : (tableTop[0] = '商品', tableTop[1] = '地区')\r\n    }\r\n\r\n    //获得选中的选择框\r\n    function getValue() {\r\n        let productValue = document.querySelectorAll('#product-radio-wrapper input'),\r\n            regionValue = document.querySelectorAll('#region-radio-wrapper input'),\r\n            values = [\r\n                [],\r\n                []\r\n            ]\r\n        productValue.forEach(function (el) {\r\n            el.checked && values[0].push(el.value)\r\n        })\r\n        regionValue.forEach(function (el) {\r\n            el.checked && values[1].push(el.value)\r\n        })\r\n        return values\r\n    }\r\n\r\n    //渲染表格\r\n    function addLabel(el, order1, order2) {\r\n        //渲染商品和地区顺序\r\n        let checkBoxTr = document.createElement('tr'),\r\n            checkBoxProductTd = document.createElement('td'),\r\n            checkBoxProductContent = document.createTextNode(order1)\r\n        checkBoxProductTd.appendChild(checkBoxProductContent)\r\n        checkBoxTr.appendChild(checkBoxProductTd)\r\n        let checkBoxRegionTd = document.createElement('td'),\r\n            checkBoxRegionContent = document.createTextNode(order2)\r\n        checkBoxRegionTd.appendChild(checkBoxRegionContent)\r\n        checkBoxTr.appendChild(checkBoxRegionTd)\r\n        //渲染销量\r\n        el.sale.forEach(function (num) {\r\n            let checkBoxTd = document.createElement('td'),\r\n                checkBoxContent = document.createTextNode(num)\r\n            checkBoxTd.appendChild(checkBoxContent)\r\n            checkBoxTr.appendChild(checkBoxTd)\r\n        })\r\n        //插入表格\r\n        Table.appendChild(checkBoxTr)\r\n    }\r\n}\r\n\r\n//合并单元格\r\nfunction mergeCell() {\r\n    let allTr = document.querySelectorAll('tr'),\r\n        rows = 1,\r\n        len = allTr.length\r\n    for (let i = 2; i <= len; i++) {\r\n        if (i == allTr.length) {\r\n            allTr[i - rows].firstChild.setAttribute('rowspan', rows)\r\n            rows = 1\r\n        } else if (allTr[i].firstChild.innerHTML == allTr[i - 1].firstChild.innerHTML) {\r\n            rows++\r\n        } else {\r\n            allTr[i - rows].firstChild.setAttribute('rowspan', rows)\r\n            rows = 1\r\n        }\r\n    }\r\n    for (let i = 1; i < len; i++) {\r\n        if (!allTr[i].children[0].getAttribute('rowspan')) {\r\n            allTr[i].removeChild(allTr[i].children[0])\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/table.js?");

/***/ })

/******/ });