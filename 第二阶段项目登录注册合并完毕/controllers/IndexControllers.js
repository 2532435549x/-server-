exports.index=function (req,res) {
    res.render('index',{});
};

exports.register=function (req,res) {
    res.render('register',{});
}

exports.login=function(req,res){
    res.render('login',{});
}

exports.checkout=function(req, res){
    res.render('checkout',{});
};
exports.furniture=function(req, res){
    res.render('furniture',{});
};

exports.mail=function(req, res){
    res.render('mail',{});
};
exports.products=function(req, res){
    res.render('products',{});
};

exports.codes=function(req, res){
    res.render('short-codes',{});
};
exports.single=function(req, res){
    res.render('single',{});
};