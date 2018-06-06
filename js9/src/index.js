"use strict";
(function () {
    //ES5
    // //继承方法
    // function extend(subType, superType) {
    //     let F = function () {}
    //     F.prototype = superType.prototype
    //     subType.prototype = new F
    //     subType.prototype.constructor = subType
    // }

    // //定义餐厅
    // let restaurant = function (opts) {
    //     this.cash = opts.cash
    //     this.seats = opts.seats
    //     this.staffs = Array.isArray(opts.staff) ? opts.staff : []
    // }
    // restaurant.prototype.hire = function (staff) {
    //     this.staffs.push(staff)

    // }
    // restaurant.prototype.fire = function (id) {
    //     let del
    //     for (let i = 0, len = this.staffs.length; i < len; i++) {
    //         this.staffs[i].staffId === id && (del = i)
    //     }
    //     this.staffs.splice(del, 1)
    // }

    // //定义职员
    // let staff = function (id, name, pay) {
    //     this.staffId = id
    //     this.staffName = name
    //     this.staffPay = pay
    // }
    // staff.prototype.food = function () {

    // }

    // //定义服务员
    // let waiter = function (id, name, pay) {
    //     staff.call(this, id, name, pay)
    // }
    // extend(waiter, staff)
    // waiter.prototype.recordFood = function () {

    // }
    // waiter.prototype.giveFood = function () {

    // }

    // //定义厨师
    // let cook = function (id, name, pay) {
    //     staff.call(this, id, name, pay)
    // }
    // extend(cook, staff)
    // cook.prototype.cooking = function () {

    // }

    // //定义顾客
    // let customer = function () {}
    // extend(customer, staff)
    // customer.prototype.chooseFood = function () {

    // }
    // customer.prototype.eatFood = function () {

    // }

    // //定义食物
    // let food = function (name, cost, price) {
    //     this.foodName = name
    //     this.foodCost = cost
    //     this.foodPrice = price
    // }


    //ES6
    //定义餐厅
    class restaurant {
        constructor(opts) {
            this.cash = opts.cash
            this.seats = opts.seats
            this.staffs = Array.isArray(opts.staff) ? opts.staff : []
        }
        hire(staff) {
            this.staffs.push(staff)
        }
        fire(id) {
            let del
            for (let i = 0, len = this.staffs.length; i < len; i++) {
                this.staffs[i].staffId === id && (del = i)
            }
            this.staffs.splice(del, 1)
        }
    }

    //定义职员
    class staff {
        constructor(id, name, pay) {
            this.staffId = id
            this.staffName = name
            this.staffPay = pay
        }
        food() {}
    }


    //定义服务员
    class waiter extends staff {
        constructor(id, name, pay) {
            super(id, name, pay)
        }
        recordFood() {}
        giveFood() {}
    }

    //定义厨师
    class cook extends staff {
        constructor(id, name, pay) {
            super(id, name, pay)
        }
        cooking() {}
    }


    //定义顾客
    class customer {
        chooseFood() {}
        eatFood() {}
    }

    //定义食物
    class food {
        constructor(name, cost, price) {
            this.foodName = name
            this.foodCost = cost
            this.foodPrice = price
        }
    }

    //测试
    let ifeRestaurant = new restaurant({
        cash: 1000000,
        seats: 20,
        staff: []
    })

    let newWaiter = new waiter(1, 'a', 1000)
    ifeRestaurant.hire(newWaiter)
    let newWaiter1 = new waiter(3, 'b', 2000)
    ifeRestaurant.hire(newWaiter1)
    ifeRestaurant.fire(1)
    console.log(ifeRestaurant.staffs)
}())