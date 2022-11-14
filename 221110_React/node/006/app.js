const path = require('path');
// 위에거 사용할거 아님. 구식임. 근데 갑자기 사용하심

// npm init --yes 입력하면 패키지.js 생김

// import path from 'path';
// 노드 설치될때 가져오는 기본 모델

console.log(`구분자:${path.sep}`);
//구분자는 os마다 다르기 때문에 파일경로 사용할때 path.sep 사용해주어야함



console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, 'source')); // 사용하세요.

