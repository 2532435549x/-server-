exports.index=function(req,res){
        var email=req.body.email;
        var password=req.body.password;

        var ByService = require('../service/ByService');
        //(2)创建对象
        var byService = new ByService();
        //(3)对象初始化
        byService.whole();
        //(4)验证用户是否合法
        byService.checkUser(email,password,function(result){
            res.end(JSON.stringify(result));
        });
      
}
