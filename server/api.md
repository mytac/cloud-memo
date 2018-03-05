## 接口
### 上传
####{{URL}}/upload
请求
```
body

{
    "context":"hello world"
}
```
响应
```
{
    "status": 0,
    "body": {
        "n": 1,
        "ok": 1
    }
}
```
### 查找或拉取文章列表
####{{URL}}/findByLabel
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
### 更新
#### {{URL}}/update
请求
```
body
{
	"id":"5a9cb46aa0f7ed28149b0dd0",
	"context":"updated!!"
}
```
响应
```
{
    "status": 0,
    "body": {
        "n": 1,
        "nModified": 0,
        "ok": 1
    }
}
```