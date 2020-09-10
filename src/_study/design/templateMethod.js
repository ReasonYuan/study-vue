// 抽象出的员工类
class Staff {
    constructor(name) {
        this.name = name
    }
		// 模板，按顺序执行
    init () {
        console.log('\n===== 员工: ' + this.name + ' =====')
        this.goto()
        console.log('-打上班卡->')
        this.work()
        console.log('<-打下班卡-')
        this.leave()
		}
		// 去上班
    goto() { }
    // 离开
    leave() { }
    // 工作
		work () { }
}
// 具体实现：老王
class LaoWang extends Staff {
    goto () {
        console.log('骑车上班')
    }
    leave () {
        console.log('骑车下班')
    }
    work () {
        console.log('开会')
        console.log('干活')
        console.log('沟通客户')
    }
}
// 具体实现：小明
class XiaoMing extends Staff {
    goto () {
        console.log('地铁上班')
    }
    leave () {
        console.log('打车下班')
    }
    work () {
        console.log('打盹')
        console.log('刷网页')
        console.log('耍手机')
    }
}

const wang = new LaoWang('老王')
wang.init()
const ming = new XiaoMing('小明')
ming.init()