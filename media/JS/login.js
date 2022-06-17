function register(){
    var display_cfpass = document.getElementById('cf_password');
        display_cfpass.style.display = 'block';
    var passwordlogin = document.getElementById('passwordlogin').value;
    var cf_password = document.getElementById('cf_password').value;
    var usernamelogin = document.getElementById('usernamelogin').value;

    if(passwordlogin === cf_password) {
        // alert('ĐĂNG KÍ THÀNH CÔNG');
        localStorage.setItem(usernamelogin, passwordlogin);
    }
    else
        alert('Đăng kí không thành công');
}
function back_home(){
    var usernamelogin = document.getElementById('usernamelogin').value;
    var passwordlogin = document.getElementById('passwordlogin').value;
    if(usernamelogin == '' || passwordlogin=='')
        alert("Xin mời đăng kí")
    else if(passwordlogin == localStorage.getItem(usernamelogin)) {
        alert('CHÀO MỪNG BẠN ĐẾN VỚI WEBSIDE');
    }
    else
        alert('TÀI KHOẢN HOẶC MẬT KHẨU KHÔNG ĐÚNG');
}