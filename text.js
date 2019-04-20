function solution(message, charLimit) {
  if (message.length <= charLimit) return message;

  let wordsArray = message.split(' '),
    resultMessage = '';

  for (let i = 0; i < wordsArray.length; i++) {
    let space = i === 0 ? '' : ' ';
    tempMessage = resultMessage + space + wordsArray[i];
    if (tempMessage.length > charLimit) {
      break;
    } else {
      resultMessage = tempMessage;
    }
  }
  return resultMessage;
}

const text = 'The quick brown fox jumps over the lazy dog',
  limit = 39;

solution(text, limit);
