window.onload = function () {
    const esw = document.querySelector('#email-sug-wrapper'),
        ei = document.querySelector('#email-input')
    let eList = ['@163.com', '@gmail.com', '@126.com', '@qq.com', '@263.net'],
        liIndex = 0 //选项li标签的索引，用此来进行键盘事件选中的判定

    //输入框失去焦点
    ei.addEventListener('blur', function () {
        hidden()
        ei.style.borderColor = '#ccc'
    })

    //输入框获得焦点
    ei.addEventListener('focus', function () {
        ei.style.borderColor = 'dodgerblue'
    })

    //输入框内容改变事件
    ei.addEventListener('input', function () {
        if (trim(ei.value)) {
            show()
            addEmail()
            reset()
        } else {
            hidden()
        }
    })

    //键盘事件
    document.addEventListener('keydown', function (e) {
        let li = document.querySelectorAll('li')
        if (li.length != 0 && esw.style.display == 'block') { //判断是否符合进行键盘事件
            switch (e.keyCode) {
                case 38:
                    setColor(li, liIndex, 0); //重置上一项的背景
                    (liIndex <= 0) ? liIndex = 4: liIndex--; //三元表达式要注意前后是否有“;”来开始与结束语句
                    setColor(li, liIndex, 1) //设置背景
                    break;
                case 40:
                    setColor(li, liIndex, 0);
                    (liIndex >= 4) ? liIndex = 0: liIndex++;
                    setColor(li, liIndex, 1)
                    break;
                case 13:
                    ei.value = li[liIndex].innerHTML
                    hidden()
                    break;
            }
        }
    })

    //设置背景颜色
    function setColor(li, liIndex, color) {
        if (color == 0) {
            li[liIndex].style.backgroundColor = '#fff'
        } else if (color == 1) {
            li[liIndex].style.backgroundColor = 'lightskyblue'
        } else if (color == 2) {
            li[liIndex].style.backgroundColor = 'palevioletred'
        }
    }

    //重置选中状态
    function reset() {
        liIndex = 0
        let li = document.querySelectorAll('li')
        setColor(li, liIndex, 2)
    }

    //隐藏列表
    function hidden() {
        esw.style.display = 'none'
    }

    //显示列表
    function show() {
        esw.style.display = 'block'
    }

    //增加email后缀
    function addEmail() {
        esw.innerHTML = '' //清空文本
        let eivalue = trim(ei.value),
            cindex = eivalue.indexOf('@'), //获取@的索引
            leftvalue = getLeft(eivalue, cindex)
        getRight(eivalue, cindex).forEach(function (val, index) {
            let li = document.createElement('li'),
                content = leftvalue + val,
                txt = document.createTextNode(content)
            li.appendChild(txt)
            esw.appendChild(li)
            addLi(li, content)
        })
    }

    //去除前后空格
    function trim(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    //获取@前面输入内容
    function getLeft(eivalue, cindex) {
        return (cindex >= 0) ? eivalue.slice(0, cindex) : eivalue;
    }

    //匹配@后面的内容
    function getRight(eivalue, cindex) {
        let gremail = []
        if (cindex == -1) { //未输入@即匹配所有
            gremail = eList
        } else {
            let rightvalue = eivalue.slice(cindex) //获取@后面的值
            eList.forEach(function (val) {
                if (val.indexOf(rightvalue) != -1) { //匹配到@后面的值
                    gremail.push(val)
                }
            })
            if (gremail.length == 0) { //当所有值匹配不到
                gremail = eList
            }
        }
        return gremail
    }

    //li选项添加事件
    function addLi(li, content) {
        //添加li点击事件（因为blur事件优于click事件，元素先隐藏再判断是否点击，所以要用mousedown）
        li.addEventListener('mousedown', function () {
            ei.value = content
        })
        li.addEventListener('mouseleave', function () {
            ei.focus() //如将获得焦点放在mousedown下，会先触发获得焦点，再执行input的失去焦点
        })
    }
    //立即获得焦点
    ei.focus()
}