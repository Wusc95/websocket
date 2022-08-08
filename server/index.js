const Ws = require('ws');
;((Ws)=>{
const server = new Ws.Server({port:9095})
const init = ()=>{
  /**
   * open
   * close
   * error
   * connection
   */
   bindEvent()

}
const bindEvent = ()=>{
  server.on('open',handleOpen)
  server.on('close',handleClose)
  server.on('error',handleError)
  server.on('connection',handleConnection)
}
const handleOpen = (e)=>{
  console.log('bk open')
}
const handleClose = (e)=>{
  console.log('bk close')
}
const handleError = (e)=>{
  console.log('bk error')
}
const handleConnection = (ws)=>{
  console.log('bk connection')
  ws.on('message',handleMessage)
}
const handleMessage = (msg)=>{
  server.clients.forEach((c)=>{
    c.send(msg)
  })
}
init();
})(Ws)