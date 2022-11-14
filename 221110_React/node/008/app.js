const http = require('http');
const server = http.createServer(function(req, res){
    console.log('server가 구동중입니다.');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.write('<h1 style="color:black">hello world</h1>');
    // 다크모드 시에는 검은색 배경이 됩니다.
    // res.write('hello world');
    res.end();
});

// server.listen(8080);
server.listen(8001);
// http://localhost:8001/
// 컨트롤c두번누르면 서버 꺼짐