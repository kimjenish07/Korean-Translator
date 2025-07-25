const translateToKorean = require('english-to-korean');

async function demo() {
  const korean = await translateToKorean('Hello, how are you?');
  console.log(korean); // 안녕하세요, 어떻게 지내세요?
}

demo();
