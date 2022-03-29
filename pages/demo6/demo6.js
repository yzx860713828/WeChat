// pages/demo6/demo6.js
Page({

    /**
     * 页面的初始数据
     */
    upload(){
        wx.chooseImage({
            count:1,
            sizeType:['original','compressed'],
            sourceType:['album','camera'],
            success:res=>{
                console.log("选择成功",res);
                this.uploadImg(res.tempFilePaths[0]);
            }
          
        })
    },
    uploadImg(fileurl){
        wx.cloud.uploadFile({
            cloudPath:new Date().getTime()+'test.jpg',
            filePath:fileurl,
            success:res => {
                console.log("上传成功",res)
                this.setData({
                    imgurl:res.fileID
                })
            },
            fail:console.error
        })
    },
    //上传一个excel文件
    upword(){
        wx.chooseMessageFile({
            count:1,
            type:'all',
            success(res){
                const tempFilePaths=res.tempFiles[0].path
                console.log("选择成功",res)
                //已经选择好了文件，该上传了
                wx.cloud.uploadFile({
                    cloudPath:new Date().getTime()+'word.doc',
                    filePath:tempFilePaths,
                    success:res => {
                        console.log("上传成功",res)
                        this.setData({
                            wordurl:res.fileID
                        })
                    },
                    fail:console.error
                })
            }
        })
    },
    //下载上传的excel
    
    data: {
        imgurl:"",
        wordurl:"",
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