;((doc,storage,location)=>{
const oEnterBtn = doc.querySelector('#enter');
const oUserName = doc.querySelector('#username');

const init = () => {
  bindEvent();
};

const bindEvent = ()=>{
  oEnterBtn.addEventListener('click',handeEnterBtnClick,false);
}

const handeEnterBtnClick = ()=> {
  const userName = oUserName.value.trim();
  if(userName.length < 6){
    alert('用户名不能小于6位')
    return;
  }
  storage.setItem('userName',userName)
  location.href='index.html'
}

init();
})(document,localStorage,location)