// pages/demo5/demo5.js
var a=0
var b=0
Page({

    /**
     * 页面的初始数据
     */
    //获取用户输入的a值
    getnuma(e){
        a=e.detail.value;
        console.log(a);
    },
    getnumb(e){
        b=e.detail.value;
        console.log(b);
    },
    sum(){
        wx.cloud.callFunction({
            name:"add",
            data:{
                a:Number(a),
                b:Number(b)
            },
            success(res){
                console.log("请求成功",res);
            },
            fail(res){
                console.log("请求失败",res);
            }
        })
    },
    //数据库api获取数据
    shujuku(){
        wx.cloud.database().collection("users").get({
            success(res){
                console.log("数据库请求成功",res);
            },
            fail(res){
                console.log("数据库请求失败",res);
            }
        })
    },
    //云函数获取数据
    yunhanshu(){
        wx.cloud.callFunction({
            name:"getdata",
            success(res){
                console.log("云函数数据库请求成功",res);
            },
            fail(res){
                console.log("云函数数据库请求失败",res);
            }
        })
        },

    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})