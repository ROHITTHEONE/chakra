function _show(){
	const navig = document.getElementById('nav');
	const ham = document.getElementById('ham');
	if(navig.className == 'closed'){
		navig.className = 'opened';
		ham.className = 'cross';
	} else{
		navig.className = 'closed';
		ham.className = 'header-hamburger';
	}
}

function _add(el){
	var arr = document.getElementById('list').children;
	for (var i = arr.length - 1; i >= 0; i--) {
		arr[i].className = '';
	}
	el.className = 'is-active'; 
}