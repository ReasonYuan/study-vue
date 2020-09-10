
// ============ 简单工厂 =============
/** 桌子抽象类 */
class Desk {
	getType () {
		return ''
	}
}
/** 塑料桌 */
class PlasticDesk1 extends Desk {
	getType() {
		return '塑料桌'
	}
}
/** 木头桌 */
class WoodDesk1 extends Desk {
	getType() {
		return '木头桌'
	}
}
/** (桌子)工厂 */
class DeskFactory {
	static createDesk (type) {
		switch (type) {
			case '塑料':
				return new PlasticDesk1();
			case '木头':
				return new WoodDesk1();
			default: 
				return null;
		}
	}
}

// 测试使用
const desk = DeskFactory.createDesk('木头')
console.log(desk.getType())


// ============ 工厂方法 =============
const Factory = function (type, content) {
	if (this instanceof Factory) {
			new this[type](content);
	} else {
			return new Factory(type, content);
	}
}
//工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
	Wood: function(content){
			console.log(content);
	},
	Plastic: function(content){
			console.log(content);
	}
}

// 测试
const a = Factory('Wood', '木头桌')
const b = Factory('Plastic', '塑料桌')
console.log(a === b)

// ============ 抽象工厂 =============
class FurnitureFactory {
	crateDesk () {}
	createChair () {}
}
/** (木料)工厂 */
class WoodFactory extends FurnitureFactory {
	crateDesk () {
		return new WoodDesk(); 
	}
	createChair () {
		return new WoodChair();
	}
}
/** 木桌 */
class WoodDesk {
	constructor () {
		console.log('木头桌子')
	}
}
/** 木椅 */
class WoodChair {
	constructor () {
		console.log('木头椅子')
	}
}
/** (塑料)工厂 */
class PlasticFactory extends FurnitureFactory{
	crateDesk () {
		return new PlasticDesk(); 
	}
	createChair () {
		return new PlasticChair();
	}
}
/** 塑料桌 */
class PlasticDesk {
	constructor () {
		console.log('塑料桌子')
	}
}
/** 塑料椅 */
class PlasticChair {
	constructor () {
		console.log('塑料椅子')
	}
}

// 测试
const factory = new WoodFactory();
factory.crateDesk()
const factory2 = new PlasticFactory();
factory2.createChair();