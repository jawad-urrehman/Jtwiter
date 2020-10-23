var express  = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../model/user_model');

router.post('/',function(req,res,next){
        user = new User({
            UserName:req.body.UserName,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
        });

        user.save(function(err,docs){
            if(err){
                let msg = 'Alread Email Registerd'
                res.status(409).send({msg:msg})            }
            else{
                res.json({msg:"user added success"});
            }
        });
});

router.delete('/:id',function(req,res,next){
    User.remove({_id:req.params.id},function(err,docs){
            if(err){
                    res.json(err);
            }
            else{
                    res.json({msg:"delete successfully message"})
            }
    });
});


router.post('/login',function(req,res,err){
    User.findOne({email:req.body.email},function(err,docs){
        if(err){
            res.send(err);
        }
        else
        if(!docs){
            let msg = 'Invalid Email'
            res.status(401).send({msg:msg})
        }
        else
        if(docs.password!= req.body.password){
            let msg = "inavlid Password"
            res.status(401).send({msg:msg})
        }
        else{
            let token = jwt.sign({user:docs},'secret',{expiresIn:7200});
            let userId = docs._id;
            let UsrName = docs.UserName
            let role = docs.role
            res.status(201).send({token:token,userId:userId,UsrName:UsrName,role:role});
        }
    })
});
    


router.get('/',function(req,res,next){
    User.find(function(err,docs){
        if (err){
            throw err;
        }
        else{
            res.json(docs);
        }
    })
})


router.get('/',function(req,res){
    User.find(function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json(docs);
        }
    });
});


router.get('/:id',function(req,res,next){
    User.findById({_id:req.params.id},function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json(docs);
        }
    });
});

router.put('/:id',function(req,res,next){
    var update ={
        UserName:req.body.UserName,
        email:req.body.email,
        password:req.body.password
    };
    User.findByIdAndUpdate({_id:req.params.id},update,function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"update successfully"})
        }
    });
});


module.exports = router;