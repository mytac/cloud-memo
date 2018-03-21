## 接口
### 上传
#### {{URL}}/upload
请求
```
body

{
    "title":"title-test6~~~",
    "context":"hello world",
    "id":" "  // 可选
}
```
响应
```
{
    "status": 0,
    "body": {
        "n": 1,
        "ok": 1,
        "id":返回新增的id
    }
}
```

### 删除文章
#### {{URL}}/delete
请求
```
body

{
	"id":"5a82b4e57a8bc7134cca641a" 
}
```
响应
```
{
    "status": 0,
    "body": {
        "n": 0,
        "ok": 1
    }
}
```


### 查找或拉取文章列表
#### {{URL}}/findByLabel
请求
```
body

{
	"id":"5a82b4e57a8bc7134cca641a" 
}
```
响应
```
{
    "status": 0,
    "body": [
        {
            "_id": "5a82b4e57a8bc7134cca641a",
            "context": "hello world"
        }
    ]
}
```