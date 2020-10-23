var express  = require('express');
var router = express.Router();

var Message = require('../model/message_model');

router.post('/',function(req,res,next){
        message = new Message({
            content:req.body.content,
            userId:req.body.userId,
            userName:req.body.userName
        });

        message.save(function(err,docs){
            if(err){
                res.json(err);
            }
            else{
                res.json({msg:"message added success"});
            }
        });
});


router.get('/',function(req,res,next){
    Message.find(function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json(docs);
        }
    }).sort({date:-1})
});

router.delete('/:id',function(req,res,next){
        Message.remove({_id:req.params.id},function(err,docs){
                if(err){
                        res.json(err);
                }
                else{
                        res.json({msg:"delete successfully message"})
                }
        });
});

router.get('/user/:id',function(req,res,next){
    Message.find({userId:req.params.id},function(err,docs){
        if(err){
            res.json(err)
        }
        else{
            res.json(docs);
        }
    }).sort({date:-1})
})

router.get('/:id',function(req,res,next){
    Message.findById({_id:req.params.id},function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json(docs);
        }
    })
})

router.put('/:id',function(req,res,next){
    var update ={
        content:req.body.content,
            userId:req.body.userId,
            userName:req.body.userName
    };
    Message.findByIdAndUpdate({_id:req.params.id},update,function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"update successfully"})
        }
    });
});



module.exports = router;
