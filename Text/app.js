let block = document.querySelector('.container');
let textBefore = document.getElementsByClassName('before-txt');
let textAfter = document.getElementsByClassName('after-txt');

let p = `One: 'Hi Mary.' Two: 'Oh, hi.'
		One: 'How are you doing?'
		Two: 'I'm doing alright. How about you?'
			One: 'Not too bad. The weather is great isn't it?'
			Two: 'Yes. It's absolutely beautiful today.'
		One: 'I wish it was like this more frequently.'
		Two: 'Me too.'
		One: 'So where are you going now?'
		Two: 'I'm going to meet a friend of mine at the department store.'
		One: 'Going to do a little shopping?'
		Two: 'Yeah, I have to buy some presents for my parents.'
		One: 'What's the occasion?'
			Two: 'It's their anniversary.'
		One: 'That's great. Well, you better get going. You don't want to be late.'
		Two: 'I'll see you next time.'
		One: 'Sure. Bye.'`;

let textBlock = document.querySelector('.before-txt');

textBlock.insertAdjacentHTML('beforeend', p);

let text = textBefore[0].textContent;
console.log(text);

let text2 = textAfter.innerText = text.replace(/^'|(\s)'|'(\s)|'$/g, ' " ');

console.log(text2);

block.insertAdjacentHTML('beforeend', text2);

