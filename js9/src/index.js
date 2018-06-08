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
            this.foods = Array.isArray(opts.foods) ? opts.foods : []
            this.waitCustomer = Array.isArray(opts.waitCustomer) ? opts.waitCustomer : []
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
        addFood(food) {
            this.foods.push(food)
        }
        addCustomer(customer) {
            this.waitCustomer.push(customer)
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
        recordFood(checkedFood) {
            console.log(this.staffName + '记录了：' + checkedFood.foodName)
        }
        giveFood(checkedFood) {
            console.log(this.staffName + '端着菜肴过来：您好！您的“' + checkedFood.foodName + '”好了，请慢用')
        }
    }

    //定义厨师
    class cook extends staff {
        constructor(id, name, pay) {
            super(id, name, pay)
        }
        cooking(checkedFood) {
            console.log('厨师“' + this.staffName + '”双眼一睁，直直盯住眼前食材，大喝一声：起！“' + checkedFood.foodName + '”经过一千种古法炮制，历时七七四十九天，终于完成了！')
        }
    }

    //定义顾客
    class customer {
        constructor(name) {
            this.customerName = name
        }
        chooseFood(restaurant) {
            let checkedFood = restaurant.foods[Math.floor(Math.random() * restaurant.foods.length)]
            console.log(this.customerName + '选择了：' + checkedFood.foodName)
            return checkedFood
        }
        eatFood() {
            console.log(this.customerName + '端起盘子就是干，差点连盘子都吃进去了')
        }
    }

    //定义食物
    class food {
        constructor(name, cost, price) {
            this.foodName = name
            this.foodCost = cost
            this.foodPrice = price
        }
    }

    //餐厅用餐流程
    let restaurantProcedure = (function () {
        let instance
        class procedure {
            constructor() {
                this.i = 0
            }
            go(restaurant) {
                this.i++;
                //顾客排队
                let cw = []
                restaurant.waitCustomer.forEach(function (el) {
                    cw.push(el.customerName)
                })
                console.log(this.i + '：排队的顾客有：' + cw)
                //顾客入座
                let c = restaurant.waitCustomer.shift()
                console.log(c.customerName + '进去餐厅用餐')
                restaurant.seats--;
                console.log('餐厅剩余座位：' + restaurant.seats)
                //顾客点菜
                let checkedFood = c.chooseFood(restaurant)
                //服务员记录菜名
                let w = restaurant.staffs[0]
                w.recordFood(checkedFood)
                //厨师做菜
                let d = restaurant.staffs[1]
                d.cooking(checkedFood)
                //完成后服务员上菜
                w.giveFood(checkedFood)
                //顾客吃
                c.eatFood()
                //吃完结账
                restaurant.cash += checkedFood.foodPrice
                console.log('餐厅收入:' + checkedFood.foodPrice + '！餐厅总账为:' + restaurant.cash)
                //顾客离开
                c = null
                restaurant.seats++;
                //排队顾客进入
                if (restaurant.waitCustomer.length !== 0) {
                    this.go(restaurant)
                }
            }
        }
        return {
            useProcedure: function () {
                if (!instance) {
                    instance = new procedure()
                }
                return instance
            }
        }

    }())

    //测试
    //初始化
    let ifeRestaurant = new restaurant({
        cash: 1000000,
        seats: 1,
        staff: [],
        foods: [],
        waitCustomer: []
    })
    let newWaiter = new waiter(1, 'Coco', 3000)
    ifeRestaurant.hire(newWaiter)
    let newCook = new cook(2, 'Tony', 10000)
    ifeRestaurant.hire(newCook)
    let newCustomer = new customer('贝爷')
    ifeRestaurant.addCustomer(newCustomer)
    let newCustomer1 = new customer('德爷')
    ifeRestaurant.addCustomer(newCustomer1)
    let newfood = new food('麻辣烫', 10, 20)
    ifeRestaurant.addFood(newfood)
    let newfood1 = new food('鸳鸯火锅', 100, 200)
    ifeRestaurant.addFood(newfood1)
    let newfood2 = new food('烤肉', 150, 300)
    ifeRestaurant.addFood(newfood2)

    //用餐流程
    restaurantProcedure.useProcedure().go(ifeRestaurant)

    setInterval(function () {}, 5000)

}())