window.onload = function() {
	left = document.getElementsByClassName("fa-angle-left fa-4x")[0];
	right = document.getElementsByClassName("fa-angle-right fa-4x")[0];
	blockImg = document.getElementsByClassName("block_img")[0];
	arrTagImg = blockImg.getElementsByTagName("img");
	Img1 = arrTagImg[0];


	i = 0;
	u = 0;
	
	left.style.color = "grey";
	
	//смена изображений вправо
	right.onclick = function(){
		arrTagImgLen = arrTagImg.length -1;
		if (i < arrTagImgLen){
			arrTagImg[i++].style.display = "none";
			arrTagImg[++u].style.display = "inline-block";
		}
		colorPointer(right, i, arrTagImgLen);
		colorPointer(left, u, "0");
		return false
	}

	
	//смена изображений влево
	left.onclick = function(){
		if ( i > 0 && u > 0){
			left.style.color = "white";
			arrTagImg[u--].style.display = "none";
			arrTagImg[--i].style.display = "inline-block";
			colorPointer(right, i, arrTagImgLen);
			colorPointer(left, u, "0");
		}
		return false
	}
	
	//изменение цвета стрелки
	function colorPointer(pointer, a, b) {
		if (a == b) {
			pointer.style.color = "grey"
		} else pointer.style.color = "#ffffff";
	}
}








