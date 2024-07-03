// 判断用户是否登录
var username = localStorage.getItem("username");
// 如果已经登录
if (username != null && username.length > 0) {
  // 获得登录的按钮们
  var btns = document.querySelectorAll(".login_form");
  for (var i = 0; i < btns.length; i ++) {
    btns[i].style.display = 'none';
  }

  document.querySelector('.logout').style.display = 'block';
  // 显示当前用户的名字，和登出按钮
  document.querySelector(".logged-user").innerHTML = username;
}

// 登出功能
var btn = document.querySelector('.logout');
btn.addEventListener('click', logout);

// 登出功能
function logout() {
  localStorage.removeItem('username');
  // 刷新页面
  location.reload();
}