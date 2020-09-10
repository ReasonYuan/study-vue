// 设置适配抽象类
class ListViewAdapter {
  getCount() {}
  getItem(index) {}
  renderItem (index) {}
}

// 需要使用适配器的类
class ListView {
  constructor () {
    this.adapter = null;
  }
  setAdapter (adapter) {
    this.adapter = adapter
  }
  render () {
    if (!this.adapter) return;
    const count = this.adapter.getCount();
    for(let i = 0; i < count; i++) {
      this.adapter.renderItem(i)
    }
  }
}

// 测试实现
class MyAdapter extends ListViewAdapter {
  constructor() {
    super()
    this.list = [{name: '张三'}, {name: '李四'}, {name: '王五'}]
  }

  getCount () {
    return this.list.length;
  }

  getItem (index) {
    return this.list[index];
  }

  renderItem (index) {
    const item = this.getItem(index);
    console.log('itme name：' + item.name)
  }
}

const listView = new ListView();
listView.setAdapter(new MyAdapter());
listView.render();