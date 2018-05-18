 window.onload = function () {
     const radioa = document.querySelector('#radio-a'),
         radiob = document.querySelector('#radio-b'),
         numa = document.querySelector('#num-a'),
         numb = document.querySelector('#num-b'),
         result = document.querySelector('#result'),
         buttons = document.querySelectorAll('#buttons>button')
     //判断是否选中
     function ischecked(ischeck) {
         let check = ischeck.checked
         if (check) {
             return true
         } else {
             return false
         }
     }
     //判断是否为数字
     function isnum(num) {
         if (!isNaN(num.value) && parseInt(num.value).toString() !== 'NaN') {
             return true
         } else {
             return false
         }
     }
     //任务一
     //第一个按钮
     buttons[0].addEventListener('click', function () {
         if (ischecked(radioa) && isnum(numa)) {
             result.innerHTML = 'Yes! This is a number'
         } else if (ischecked(radiob) && isnum(numb)) {
             result.innerHTML = 'Yes! This is a number'
         } else if (ischecked(radioa) || ischecked(radiob)) {
             result.innerHTML = 'No! This is not a number'
         }
     })
     //第二个按钮
     buttons[1].addEventListener('click', function () {
         if (isnum(numa) && isnum(numb)) {
             let bround = Math.round(numb.value),
                 apoint = Math.pow(10, Math.round(numb.value)),
                 around = Math.round(parseFloat(numa.value) * apoint),
                 abround = (around / apoint).toFixed(Math.round(numb.value))
             result.innerHTML = abround
         } else {
             console.log('请在A、B框中输入数字')
         }
     })
     //第三个按钮
     buttons[2].addEventListener('click', function () {
         if (ischecked(radioa) && isnum(numa)) {
             result.innerHTML = Math.abs(Number(numa.value))
         } else if (ischecked(radiob) && isnum(numb)) {
             result.innerHTML = Math.abs(Number(numb.value))
         } else {
             console.log('请输入数字')
         }
     })
     //第四个按钮
     buttons[3].addEventListener('click', function () {
         if (ischecked(radioa) && isnum(numa)) {
             result.innerHTML = Math.ceil(Number(numa.value))
         } else if (ischecked(radiob) && isnum(numb)) {
             result.innerHTML = Math.ceil(Number(numb.value))
         } else {
             console.log('请输入数字')
         }
     })
     //第五个按钮
     buttons[4].addEventListener('click', function () {
         if (ischecked(radioa) && isnum(numa)) {
             result.innerHTML = Math.floor(Number(numa.value))
         } else if (ischecked(radiob) && isnum(numb)) {
             result.innerHTML = Math.floor(Number(numb.value))
         } else {
             console.log('请输入数字')
         }
     })
     //第六个按钮
     buttons[5].addEventListener('click', function () {
         if (ischecked(radioa) && isnum(numa)) {
             result.innerHTML = Math.round(Number(numa.value))
         } else if (ischecked(radiob) && isnum(numb)) {
             result.innerHTML = Math.round(Number(numb.value))
         } else {
             console.log('请输入数字')
         }
     })
     //第七个按钮
     buttons[6].addEventListener('click', function () {
         if (isnum(numa) && isnum(numb)) {
             result.innerHTML = Math.max(Number(numa.value), Number(numb.value))
         } else {
             console.log('请在A、B框中输入数字')
         }
     })
     //第八个按钮
     buttons[7].addEventListener('click', function () {
         if (isnum(numa) && isnum(numb)) {
             result.innerHTML = Math.min(Number(numa.value), Number(numb.value))
         } else {
             console.log('请在A、B框中输入数字')
         }
     })
     //任务二
     const radioc = document.querySelector('#radio-c'),
         radiod = document.querySelector('#radio-d'),
         strc = document.querySelector('#str-c'),
         strd = document.querySelector('#str-d'),
         numc = document.querySelector('#num-c'),
         numd = document.querySelector('#num-d'),
         result1 = document.querySelector('#result1'),
         buttons1 = document.querySelectorAll('#buttons1>button')
     //第一个按钮
     buttons1[0].addEventListener('click', function () {
         if (ischecked(radioc)) {
             result1.innerHTML = strc.value.replace(/[^\x00-\xff]/g, 'aa').replace(/ /g, '').length
         } else if (ischecked(radiod)) {
             result1.innerHTML = strd.value.replace(/[^\x00-\xff]/g, 'aa').replace(/ /g, '').length
         }
     })
     //第二个按钮
     buttons1[1].addEventListener('click', function () {
         if (ischecked(radioc)) {
             result1.innerHTML = strc.value.charAt(2)
         } else if (ischecked(radiod)) {
             result1.innerHTML = strd.value.charAt(2)
         }
     })
     //第三个按钮
     buttons1[2].addEventListener('click', function () {
         result1.innerHTML = strc.value.concat(strd.value)
     })
     //第四个按钮
     buttons1[3].addEventListener('click', function () {
         result1.innerHTML = strc.value.indexOf(strd.value)
     })
     //第五个按钮
     buttons1[4].addEventListener('click', function () {
         result1.innerHTML = strd.value.lastIndexOf(strc.value)
     })
     //第六个按钮
     buttons1[5].addEventListener('click', function () {
         if (ischecked(radioc)) {
             result1.innerHTML = strc.value.slice(numc.value, numd.value)
         } else if (ischecked(radiod)) {
             result1.innerHTML = strd.value.slice(numc.value, numd.value)
         }
     })
     //第七个按钮
     buttons1[6].addEventListener('click', function () {
         if (ischecked(radioc)) {
             result1.innerHTML = strc.rows
         } else if (ischecked(radiod)) {
             result1.innerHTML = strd.rows
         }
     })
     //第八个按钮
     buttons1[7].addEventListener('click', function () {
         if (ischecked(radioc) && isnum(numd)) {
             result1.innerHTML = strc.value.substr(numc.value, Number(numd.value))
         } else if (ischecked(radiod) && isnum(numd)) {
             result1.innerHTML = strd.value.substr(numc.value, Number(numd.value))
         }
     })
     //第九个按钮
     buttons1[8].addEventListener('click', function () {
         if (ischecked(radioc)) {
             result1.innerHTML = strc.value.toUpperCase()
         } else if (ischecked(radiod)) {
             result1.innerHTML = strd.value.toUpperCase()
         }
     })
     //第十个按钮
     buttons1[9].addEventListener('click', function () {
         if (ischecked(radioc)) {
             result1.innerHTML = strc.value.toLowerCase()
         } else if (ischecked(radiod)) {
             result1.innerHTML = strd.value.toLowerCase()
         }
     })
     //第十一个按钮
     buttons1[10].addEventListener('click', function () {
         if (ischecked(radioc)) {
             result1.innerHTML = strc.value.replace(/ /g, '')
         } else if (ischecked(radiod)) {
             result1.innerHTML = strd.value.replace(/ /g, '')
         }
     })
     //第十二个按钮
     buttons1[11].addEventListener('click', function () {
         if (ischecked(radioc)) {
             result1.innerHTML = strc.value.replace(/a/g, strd.value)
         } else if (ischecked(radiod)) {
             result1.innerHTML = strd.value.replace(/a/g, strc.value)
         }
     })
     //任务三

     // 实现一个字符串头尾去除空格的函数
     // 注意需要去除的空格，包括全角、半角空格
     // 暂时不需要学习和使用正则表达式的方式
     function diyTrim(str) {
         for (let i = 0, len = str.length; i < len; i++) {
             if (str[0] == ' ' || str[0] == '　') {
                 str = str.slice(1)
             } else if (str[str.length - 1] == ' ' || str[str.length - 1] == '　') {
                 str = str.slice(0, str.length - 2)
             } else {
                 break
             }
         }
         return str
     }
     // 测试用例
     //  console.log(diyTrim(' a f b    ')); // ->a f b
     //  console.log(diyTrim('    ffdaf    ')); // ->ffdaf
     //  console.log(diyTrim('1    ')); // ->1
     //  console.log(diyTrim('　　f')); // ->f
     //  console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
     //  console.log(diyTrim(' ')); // ->
     //  console.log(diyTrim('　')); // ->
     //  console.log(diyTrim('')); // ->
     /*
     去掉字符串str中，连续重复的地方
     */
     function removeRepetition(str) {
         let result2 = ''
         for (let i = 0, len = str.length; i < len; i++) {
             if (str[0] == str[1]) {
                 str = str.slice(1)
             } else {
                 result2 = result2 + str[0]
                 str = str.slice(1)
             }
         }
         return result2;
     }
     // 测试用例
     //  console.log(removeRepetition("aaa")); // ->a
     //  console.log(removeRepetition("abbba")); // ->aba
     //  console.log(removeRepetition("aabbaabb")); // ->abab
     //  console.log(removeRepetition("")); // ->
     //  console.log(removeRepetition("abc")); // ->abc

     //任务四
     let tree = {
         "id": 0,
         "name": "root",
         "left": {
             "id": 1,
             "name": "Simon",
             "left": {
                 "id": 3,
                 "name": "Carl",
                 "left": {
                     "id": 7,
                     "name": "Lee",
                     "left": {
                         "id": 11,
                         "name": "Fate"
                     }
                 },
                 "right": {
                     "id": 8,
                     "name": "Annie",
                     "left": {
                         "id": 12,
                         "name": "Saber"
                     }
                 }
             },
             "right": {
                 "id": 4,
                 "name": "Tony",
                 "left": {
                     "id": 9,
                     "name": "Candy"
                 }
             }
         },
         "right": {
             "id": 2,
             "name": "right",
             "left": {
                 "id": 5,
                 "name": "Carl",
             },
             "right": {
                 "id": 6,
                 "name": "Carl",
                 "right": {
                     "id": 10,
                     "name": "Kai"
                 }
             }
         }
     }
     let n = document.querySelector('#findidbyname'),
         d = document.querySelector('#findnamebyid'),
         ibn = document.querySelector('#ibnbtn'),
         nbi = document.querySelector('#nbibtn')

     // 假设id和name均不会重复，根据输入name找到对应的id
     ibn.addEventListener('click', function () {
         let name = n.value
         findIdByName(tree, name)
     })

     function findIdByName(obj, name) {
         for (let a in obj) {
             if (typeof (obj[a]) == "object") {
                 findIdByName(obj[a], name); //递归遍历
             } else if (a == 'name' && obj[a] == name) {
                 console.log(obj.id)
             }
         }
     }

     // 假设id和name均不会重复，根据输入id找到对应的name
     nbi.addEventListener('click', function () {
         let id = d.value
         findNameById(tree, id)
     })

     function findNameById(obj, id) {
         for (let a in obj) {
             if (typeof (obj[a]) == "object") {
                 findNameById(obj[a], id); //递归遍历
             } else if (id != '' && a == 'id' && obj[a] == id) {
                 console.log(obj.name)
             }
         }
     }

     // 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
     ubtn.addEventListener('click', function () {
         getListWithDLR(tree)
     })

     function getListWithDLR(tree) {
         if (typeof (tree) == "object") {
             console.log(tree.name)
             getListWithLDR(tree.left)
             getListWithLDR(tree.right)
         }
     }

     // 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
     mbtn.addEventListener('click', function () {
         getListWithLDR(tree)
     })

     function getListWithLDR(tree) {
         if (typeof (tree) == "object") {
             getListWithLDR(tree.left)
             console.log(tree.name)
             getListWithLDR(tree.right)
         }
     }

     // 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
     dbtn.addEventListener('click', function () {
         getListWithLRD(tree)
     })

     function getListWithLRD(tree) {
         if (typeof (tree) == "object") {
             getListWithLDR(tree.left)
             getListWithLDR(tree.right)
             console.log(tree.name)
         }
     }

     //任务五
     let queue = [],
         queueinput = document.querySelector('#queue-input'),
         queuecont = document.querySelector('#queue-cont'),
         inbtn = document.querySelector('#in-btn'),
         outbtn = document.querySelector('#out-btn'),
         fontbtn = document.querySelector('#font-btn'),
         emptybt = document.querySelector('#empty-btn')

     inbtn.onclick = function () {
         queue.unshift(queueinput.value)
         queuecont.innerHTML = queue.join('-&gt;')
     }
     outbtn.onclick = function () {
         queue.pop(queueinput.value)
         queuecont.innerHTML = queue.join('-&gt;')
     }
     fontbtn.onclick = function () {
         console.log(queue[queue.length - 1])
     }
     emptybt.onclick = function () {
         if (queue.length == 0) {
             queuecont.innerHTML = '队列为空'
         }
     }

     //任务六
     let queue1 = [],
         queueinput1 = document.querySelector('#queue-input1'),
         queuecont1 = document.querySelector('#queue-cont1'),
         inbtn1 = document.querySelector('#in-btn1'),
         outbtn1 = document.querySelector('#out-btn1'),
         fontbtn1 = document.querySelector('#font-btn1'),
         emptybt1 = document.querySelector('#empty-btn1')

     inbtn1.onclick = function () {
         queue1.push(queueinput1.value)
         queuecont1.innerHTML = queue1.join('&lt;-')
     }
     outbtn1.onclick = function () {
         queue1.shift(queueinput1.value)
         queuecont1.innerHTML = queue1.join('&lt;-')
     }
     fontbtn1.onclick = function () {
         console.log(queue1[0])
     }
     emptybt1.onclick = function () {
         if (queue1.length == 0) {
             queuecont1.innerHTML = '队列为空'
         }
     }

     //任务七
     let arr71 = [43, 54, 4, -4, 84, 100, 58, 27, 140]
     let arr72 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane']
     let arr73 = [
         [10, 14],
         [16, 60],
         [7, 44],
         [26, 35],
         [22, 63]
     ]
     let arr74 = [{
         id: 1,
         name: 'candy',
         value: 40
     }, {
         id: 2,
         name: 'Simon',
         value: 50
     }, {
         id: 3,
         name: 'Tony',
         value: 45
     }, {
         id: 4,
         name: 'Annie',
         value: 60
     }]
     console.log(arr71.sort((a, b) => a - b))
     console.log(arr71.sort((a, b) => b - a))
     let arrs72 = arr72.sort()
     console.log(arrs72)
     console.log(arrs72.reverse()) //reverse()方法可倒转数组顺序
     arr73.sort(function (a, b) {
         return b[1] - a[1]
     })
     console.log(arr73)
     arr74.sort(function (a, b) {
         return a.value - b.value
     })
     console.log(arr74)

     //任务八
     let scoreObject = {
         "Tony": {
             "Math": 95,
             "English": 79,
             "Music": 68
         },
         "Simon": {
             "Math": 100,
             "English": 95,
             "Music": 98
         },
         "Annie": {
             "Math": 54,
             "English": 65,
             "Music": 88
         }
     }
     let menuArr = [
         [1, "Area1", -1],
         [2, "Area2", -1],
         [3, "Area1-1", 1],
         [4, "Area1-2", 1],
         [5, "Area2-1", 2],
         [6, "Area2-2", 2],
         [7, "Area1-2-3", 4],
         [8, "Area2-2-1", 6],
     ];
     let arr75 = []
     for (let i in scoreObject) {
         let k = [i]
         for (let j in scoreObject[i]) {
             k.push(scoreObject[i][j])
         }
         arr75.push(k)
     }
     console.log(arr75)
     let obj76 = {
         '-1': {}
     }
     for (let i = 0; i < menuArr.length; i++) {
         //数组的第三项是父节点的键值，有点晕下次再做
     }
     console.log(obj76)

 }