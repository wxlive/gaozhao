const fs = require('fs')
const path = require('path')
const json5 = require('json5')
const Mock = require("mockjs")

function getJsonFile(filepath) {
    var indexjson = fs.readFileSync(path.join(__dirname,filepath),'utf-8')
    var obj = json5.parse(indexjson)
    return obj
}

module.exports = function (app) {
   if(process.env.Mock == 'true'){
        app.get('/header',function (req,res) {
            var json = getJsonFile('./header.json5')
            res.json(Mock.mock(json))
        })
        app.get('/index',function (req,res) {
            var json = getJsonFile('./index.json5')
            res.json(Mock.mock(json))
        })
        app.get('/footer',function (req,res) {
            var json = getJsonFile('./footer.json5')
            res.json(Mock.mock(json))
        })
        app.get('/policy',function (req,res) {
            var json = getJsonFile('./policy.json5')
            res.json(Mock.mock(json))
        })
        app.get('/newest',function (req,res) {
            var json = getJsonFile('./newest.json5')
            res.json(Mock.mock(json))
        })
        app.get('/detail',function (req,res) {
            var json = getJsonFile('./detail.json5')
            res.json(Mock.mock(json))
        })
        app.get('/interview',function (req,res) {
            var json = getJsonFile('./interview.json5')
            res.json(Mock.mock(json))
        })
        app.get('/interviewItem',function (req,res) {
            var json = getJsonFile('./interviewItem.json5')
            res.json(Mock.mock(json))
        })
        app.get('/interviewContent',function (req,res) {
            var json = getJsonFile('./interviewContent.json5')
            res.json(Mock.mock(json))
        })
        app.post('/zan',function (req,res) {
            var json = getJsonFile('./zan.json5')
            res.json(Mock.mock(json))
        })
        app.get('/question',function (req,res) {
            var json = getJsonFile('./questions.json5')
            res.json(Mock.mock(json))
        })
        app.get('/score',function (req,res) {
            var json = getJsonFile('./score.json5')
            res.json(Mock.mock(json))
        })
        app.get('/scoreType',function (req,res) {
            var json = getJsonFile('./scoreType.json5')
            res.json(Mock.mock(json))
        })
        app.get('/guide',function (req,res) {
            var json = getJsonFile('./detail.json5')
            res.json(Mock.mock(json))
        })
        app.get('/newsItem',function (req,res) {
            var json = getJsonFile('./newsItem.json5')
            res.json(Mock.mock(json))
        })
        app.get('/submitQuestion',function (req,res) {
            var json = getJsonFile('./submitQuestion.json5')
            res.json(Mock.mock(json))
        })
        app.get('/haibaoItem',function (req,res) {
            var json = getJsonFile('./haibaoItem.json5')
            res.json(Mock.mock(json))
        })
        app.get('/haibaoDetail',function (req,res) {
            var json = getJsonFile('./haibaoDetail.json5')
            res.json(Mock.mock(json))
        })
        app.get('/get_seo',function (req,res) {
            var json = getJsonFile('./get_seo.json5')
            res.json(Mock.mock(json))
        })
    }
}

