function validate(forma){
	console.log(forma.name)

	var question = isFullText(forma.question);

	var name = isCorrect(forma.name);
	var phone = phoneCorrect(forma.phone);
	var mail = mailCorrect(forma.mail);

	return name && phone && question && mail ;
	}
	
	function deleteSpan(text){
		if (text.parentNode.getElementsByTagName("span").length > 0){
				text.parentNode.getElementsByTagName("span")[0].remove();
		}
	}
	
	function isFullText(text){
		console.log(text);
		deleteSpan(text);
		if (text.value == "" || text.value == " "){
			var item = document.createElement("span");
			item.innerHTML = "Введите информацию";
			text.style.backgroundColor = "pink";
			text.parentNode.appendChild(item);
			return false;
		}
		text.style.backgroundColor = "#fff";
		return true;
	}
	
	function isCorrect(text){ 
		var reg =/[А-Яа-я\s]/;
		var regNum = /\d/;
		deleteSpan(text);
		if (text.value == "" || text.value == " "){
			var item = document.createElement("span");
			item.innerHTML = "Введите информацию";
			text.style.backgroundColor = "pink";
			text.parentNode.appendChild(item);
			return false;
		}
				if (regNum.test(text.value) || !reg.test(text.value) && !text.value == ""){
					var item = document.createElement("span");
					item.innerHTML = "Введите, пожалуйста, Ваше действительное имя на кириллице";
					text.parentNode.appendChild(item);
					text.style.backgroundColor = "pink";
					return false;
				}
		
		text.style.backgroundColor = "#fff";
		return true;
	
	}	
	
	function phoneCorrect(text){ 
	deleteSpan(text);
		var reg =/[А-Яа-яA-Za-z]/;
		var regNum = /\+?[\d\s]{5,15}/;
		if (text.value == "" || text.value == " "){
			var item = document.createElement("span");
			item.innerHTML = "Введите информацию";
			text.style.backgroundColor = "pink";
			text.parentNode.appendChild(item);
			return false;
		}
				if ((!regNum.test(text.value) || reg.test(text.value)) && !text.value == ""){
					var item = document.createElement("span");
					item.innerHTML = "Введите, пожалуйста, номер телефона корректно";
					text.parentNode.appendChild(item);
					text.style.backgroundColor = "pink";
					return false;
				}
		text.style.backgroundColor = "#fff";
		return true;
	}	
	
	function mailCorrect(text){ 
		deleteSpan(text)
		if (text.value == ""){
			var item = document.createElement("span");
			item.innerHTML = "поле E-mail не должен быть пустым!";
			text.parentNode.appendChild(item);
			text.style.backgroundColor = "pink";
			return false;
		}
		var reg =/[\w\._]+@\w+\.([a-z]{2,3})/;
		if (reg.test(text.value)){
			text.style.backgroundColor = "#fff";
		return true;

		}	else{	
				var item = document.createElement("span");
				item.innerHTML = "E-mail должен быть реальным!";
				text.parentNode.appendChild(item);
				text.style.backgroundColor = "pink";
				return false;
			}
	}

