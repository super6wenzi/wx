Page({
  data: {
    isAllSelect: false,
    totalMoney: 0,
    // 商品详情介绍
    carts: [
      {
        pic: "http://127.0.0.1:3000/img/show/show1.jpg",
        name: "复仇者联盟4：终极之战",
        price: 59.9,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'http://127.0.0.1:3000/img/show/show2.jpg',
        name: "何以为家",
        price: 29.9,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'http://127.0.0.1:3000/img/show/show3.jpg',
        name: "大侦探皮卡丘",
        price: 49.9,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 3,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'http://127.0.0.1:3000/img/show/show4.jpg',
        name: "撞死了一只羊",
        price: 39.9,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'http://127.0.0.1:3000/img/show/show5.jpg',
        name: "下一站：前任",
        price: 9.9,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 10,
          min: 1,
          max: 20
        },
      },
      {
        pic: "http://127.0.0.1:3000/img/show/show6.jpg",
        name: "雪暴",
        price: 39.9,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
    ],
  },

  //勾选事件处理函数 
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值 
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + this.data.carts[index].price;
    }
    else {
      this.data.totalMoney = this.data.totalMoney - this.data.carts[index].price;
    }
    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + this.data.carts[i].price;
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  //全选
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    if (!this.data.isAllSelect) {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + this.data.carts[i].price;
      }
    }
    else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  // 去结算
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  //数量变化处理
  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].count.quantity = quantity;
    this.setData({
      carts: this.data.carts,
    });
  }
});