;((doc,storage,location)=>{
  if(!storage.getItem('userName')){
    location.href='entry.html'
    return
  }
const sendBtn = doc.querySelector('#sendBtn');
const message = doc.querySelector('#sendMessage');
const alist = doc.querySelector('#alist')

const ws = new WebSocket("ws://localhost:9095")

const init = ()=>{
  bindEvent();
}

const bindEvent = ()=>{
  sendBtn.addEventListener('click',handSendBtnClick,false)
  /**
 * WebSocket 相关事件
 * open
 * close
 * error
 * message
 */
  ws.addEventListener('open',handOpen,false)
  ws.addEventListener('close',handClose,false)
  ws.addEventListener('error',handError,false)
  ws.addEventListener('message',handMessage,false)
}
const handSendBtnClick = () =>{
  console.log('send Message')
  if(!message.value.trim()) return;
  ws.send(JSON.stringify({
    name:localStorage.getItem('userName'),
    date:new Date().getTime(),
    message:message.value
  }))
  message.value = ''
}
const handOpen = (e)=>{
  console.log('WebSocket open')
}
const handClose = (e)=>{
  console.log('WebSocket close')
}
const handError = (e)=>{
  console.log('WebSocket error')
}
const handMessage = (e)=>{
  console.log('WebSocket message')
  const msgData = JSON.parse(e.data)
  alist.appendChild(createNode(msgData))
  console.log(e)
}
const createNode = (data) =>{
  const {name,date,message} = data
  const oItem = doc.createElement('li');
  oItem.innerHTML = `
    <p>
      <span>${name}</span>
      <i>${new Date(date)}</i>
    </p>
    <p>${message}</p>
  `
  return oItem;
}
init();
})(document,localStorage,location)