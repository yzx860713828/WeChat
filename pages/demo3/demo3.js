// pages/demo3/demo3.js
//通过数据库api获取数据库数据
const DB=wx.cloud.database().collection("list")
let s=""
let age=""
let name=""
let id=""
Page({

    /**
     * 页面的初始数据
     */
    //获取用户要更新的数据id
    updatainput(e){
        id=e.detail.value;
    },
   //获取用户输入的名字
    addname(e){
        name=e.detail.value;
    },
    //获取用户输入的年龄
    addage(e){
        age=e.detail.value;
    },
    //获取要删除的id
    deldatainput(e){
        id=e.detail.value;
    },
    //添加数据
    addData(){
        DB.add({
            data:{
                name:name,
                age:age
            },
            success(res){
                console.log("添加成功",res);
            },
            fail(res){
                console.log("添加失败",res);
            }
        })   
    },
    //查询数据 
    getData(){
            DB.get({
                success(res){
                    console.log("查询成功",res);
                }

            })
        },
        //删除数据
        deldata(){
            DB.doc(id).remove({
                success(res){
                    console.log("删除成功",res);
                },
                fail(res){
                    console.log("删除失败",res);
                }
            })
        },
        //更新数据
        updata(){
            DB.doc(id).update({
                data:{
                    age:age
                },
                success(res){
                    console.log("更新成功",res);
                },
                fail(res){
                    console.log("更新失败",res);
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