

window.onload = function() {
	
	menuMain = document.getElementById("menuMain");
	menu = document.getElementsByClassName("menu")[0];
	itemMain = menu.childNodes[1];
	corner = itemMain.getBoundingClientRect();
	
	function changeMenuColor(t){
		if (t.tagName == null) {
			return;
		}
		if (t.tagName != 'LI') return;
		t.style.backgroundColor = "#716963";
		t.onmouseout = function (){
			t.style.backgroundColor = "#ba9d89";
		}
	}
	

	//Раскрытие списка пункта меню "Главная"
	itemMain.onmouseover = function (){
		menuMain.style.display = "block";
		x = corner.right;
		y = corner.top;
		xDif = corner.left;
		menuMain.style.top = y + "px";
		menuMain.style.left = x - xDif + 0 + "px";
		menuMain.style.padding= "0 0 0 20px";
	}
		

	itemMain.onmouseout = function (event){
menuMain.onmouseout(event);
	}

	//Скрытие списка пункта меню "Главная"
	menuMain.onmouseout = function (event){
		var offElem = event.target;
		correctionEventElement(offElem);

		var jumpToElem = event.relatedTarget;
		correctionEventElement(jumpToElem);

		if (jumpToElem != menuMain) {
			menuMain.style.display = "none";
		}
		
		//если событие произошло внутри элемента menuMain
		function correctionEventElement(t){
			while (t != menuMain) {
				if (t.tagName == null) {
					return;
				}
				t = t.parentNode; 
			}
			offElem = t;
			jumpToElem = t;
		}
	}
}







