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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n(function () {\r\n    //ES5\r\n    // //继承方法\r\n    // function extend(subType, superType) {\r\n    //     let F = function () {}\r\n    //     F.prototype = superType.prototype\r\n    //     subType.prototype = new F\r\n    //     subType.prototype.constructor = subType\r\n    // }\r\n\r\n    // //定义餐厅\r\n    // let restaurant = function (opts) {\r\n    //     this.cash = opts.cash\r\n    //     this.seats = opts.seats\r\n    //     this.staffs = Array.isArray(opts.staff) ? opts.staff : []\r\n    // }\r\n    // restaurant.prototype.hire = function (staff) {\r\n    //     this.staffs.push(staff)\r\n\r\n    // }\r\n    // restaurant.prototype.fire = function (id) {\r\n    //     let del\r\n    //     for (let i = 0, len = this.staffs.length; i < len; i++) {\r\n    //         this.staffs[i].staffId === id && (del = i)\r\n    //     }\r\n    //     this.staffs.splice(del, 1)\r\n    // }\r\n\r\n    // //定义职员\r\n    // let staff = function (id, name, pay) {\r\n    //     this.staffId = id\r\n    //     this.staffName = name\r\n    //     this.staffPay = pay\r\n    // }\r\n    // staff.prototype.food = function () {\r\n\r\n    // }\r\n\r\n    // //定义服务员\r\n    // let waiter = function (id, name, pay) {\r\n    //     staff.call(this, id, name, pay)\r\n    // }\r\n    // extend(waiter, staff)\r\n    // waiter.prototype.recordFood = function () {\r\n\r\n    // }\r\n    // waiter.prototype.giveFood = function () {\r\n\r\n    // }\r\n\r\n    // //定义厨师\r\n    // let cook = function (id, name, pay) {\r\n    //     staff.call(this, id, name, pay)\r\n    // }\r\n    // extend(cook, staff)\r\n    // cook.prototype.cooking = function () {\r\n\r\n    // }\r\n\r\n    // //定义顾客\r\n    // let customer = function () {}\r\n    // extend(customer, staff)\r\n    // customer.prototype.chooseFood = function () {\r\n\r\n    // }\r\n    // customer.prototype.eatFood = function () {\r\n\r\n    // }\r\n\r\n    // //定义食物\r\n    // let food = function (name, cost, price) {\r\n    //     this.foodName = name\r\n    //     this.foodCost = cost\r\n    //     this.foodPrice = price\r\n    // }\r\n\r\n\r\n    //ES6\r\n    //定义餐厅\r\n    class restaurant {\r\n        constructor(opts) {\r\n            this.cash = opts.cash\r\n            this.seats = opts.seats\r\n            this.staffs = Array.isArray(opts.staff) ? opts.staff : []\r\n            this.foods = Array.isArray(opts.foods) ? opts.foods : []\r\n            this.waitCustomer = Array.isArray(opts.waitCustomer) ? opts.waitCustomer : []\r\n        }\r\n        hire(staff) {\r\n            this.staffs.push(staff)\r\n        }\r\n        fire(id) {\r\n            let del\r\n            for (let i = 0, len = this.staffs.length; i < len; i++) {\r\n                this.staffs[i].staffId === id && (del = i)\r\n            }\r\n            this.staffs.splice(del, 1)\r\n        }\r\n        addFood(food) {\r\n            this.foods.push(food)\r\n        }\r\n        addCustomer(customer) {\r\n            this.waitCustomer.push(customer)\r\n        }\r\n    }\r\n\r\n    //定义职员\r\n    class staff {\r\n        constructor(id, name, pay) {\r\n            this.staffId = id\r\n            this.staffName = name\r\n            this.staffPay = pay\r\n        }\r\n        food() {}\r\n    }\r\n\r\n    //定义服务员\r\n    class waiter extends staff {\r\n        constructor(id, name, pay) {\r\n            super(id, name, pay)\r\n        }\r\n        recordFood(checkedFood) {\r\n            console.log(this.staffName + '记录了：' + checkedFood.foodName)\r\n        }\r\n        giveFood(checkedFood) {\r\n            console.log(this.staffName + '端着菜肴过来：您好！您的“' + checkedFood.foodName + '”好了，请慢用')\r\n        }\r\n    }\r\n\r\n    //定义厨师\r\n    class cook extends staff {\r\n        constructor(id, name, pay) {\r\n            super(id, name, pay)\r\n        }\r\n        cooking(checkedFood) {\r\n            console.log('厨师“' + this.staffName + '”双眼一睁，直直盯住眼前食材，大喝一声：起！“' + checkedFood.foodName + '”经过一千种古法炮制，历时七七四十九天，终于完成了！')\r\n        }\r\n    }\r\n\r\n    //定义顾客\r\n    class customer {\r\n        constructor(name) {\r\n            this.customerName = name\r\n        }\r\n        chooseFood(restaurant) {\r\n            let checkedFood = restaurant.foods[Math.floor(Math.random() * restaurant.foods.length)]\r\n            console.log(this.customerName + '选择了：' + checkedFood.foodName)\r\n            return checkedFood\r\n        }\r\n        eatFood() {\r\n            console.log(this.customerName + '端起盘子就是干，差点连盘子都吃进去了')\r\n        }\r\n    }\r\n\r\n    //定义食物\r\n    class food {\r\n        constructor(name, cost, price) {\r\n            this.foodName = name\r\n            this.foodCost = cost\r\n            this.foodPrice = price\r\n        }\r\n    }\r\n\r\n    //餐厅用餐流程\r\n    let restaurantProcedure = (function () {\r\n        let instance\r\n        class procedure {\r\n            constructor() {\r\n                this.i = 0\r\n            }\r\n            go(restaurant) {\r\n                this.i++;\r\n                //顾客排队\r\n                let cw = []\r\n                restaurant.waitCustomer.forEach(function (el) {\r\n                    cw.push(el.customerName)\r\n                })\r\n                console.log(this.i + '：排队的顾客有：' + cw)\r\n                //顾客入座\r\n                let c = restaurant.waitCustomer.shift()\r\n                console.log(c.customerName + '进去餐厅用餐')\r\n                restaurant.seats--;\r\n                console.log('餐厅剩余座位：' + restaurant.seats)\r\n                //顾客点菜\r\n                let checkedFood = c.chooseFood(restaurant)\r\n                //服务员记录菜名\r\n                let w = restaurant.staffs[0]\r\n                w.recordFood(checkedFood)\r\n                //厨师做菜\r\n                let d = restaurant.staffs[1]\r\n                d.cooking(checkedFood)\r\n                //完成后服务员上菜\r\n                w.giveFood(checkedFood)\r\n                //顾客吃\r\n                c.eatFood()\r\n                //吃完结账\r\n                restaurant.cash += checkedFood.foodPrice\r\n                console.log('餐厅收入:' + checkedFood.foodPrice + '！餐厅总账为:' + restaurant.cash)\r\n                //顾客离开\r\n                c = null\r\n                restaurant.seats++;\r\n                //排队顾客进入\r\n                if (restaurant.waitCustomer.length !== 0) {\r\n                    this.go(restaurant)\r\n                }\r\n            }\r\n        }\r\n        return {\r\n            useProcedure: function () {\r\n                if (!instance) {\r\n                    instance = new procedure()\r\n                }\r\n                return instance\r\n            }\r\n        }\r\n\r\n    }())\r\n\r\n    //测试\r\n    //初始化\r\n    let ifeRestaurant = new restaurant({\r\n        cash: 1000000,\r\n        seats: 1,\r\n        staff: [],\r\n        foods: [],\r\n        waitCustomer: []\r\n    })\r\n    let newWaiter = new waiter(1, 'Coco', 3000)\r\n    ifeRestaurant.hire(newWaiter)\r\n    let newCook = new cook(2, 'Tony', 10000)\r\n    ifeRestaurant.hire(newCook)\r\n    let newCustomer = new customer('贝爷')\r\n    ifeRestaurant.addCustomer(newCustomer)\r\n    let newCustomer1 = new customer('德爷')\r\n    ifeRestaurant.addCustomer(newCustomer1)\r\n    let newfood = new food('麻辣烫', 10, 20)\r\n    ifeRestaurant.addFood(newfood)\r\n    let newfood1 = new food('鸳鸯火锅', 100, 200)\r\n    ifeRestaurant.addFood(newfood1)\r\n    let newfood2 = new food('烤肉', 150, 300)\r\n    ifeRestaurant.addFood(newfood2)\r\n\r\n    //用餐流程\r\n    restaurantProcedure.useProcedure().go(ifeRestaurant)\r\n\r\n    setInterval(function () {}, 5000)\r\n\r\n}())\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });