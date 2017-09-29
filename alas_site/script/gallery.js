window.onload = function() {
	left = document.getElementsByClassName("fa-angle-left fa-4x")[0];
	right = document.getElementsByClassName("fa-angle-right fa-4x")[0];
	blockImg = document.getElementsByClassName("block_img")[0];
	arrTagImg = blockImg.getElementsByTagName("img");
	Img1 = arrTagImg[0];

	Img2 = new Image();
	Img2.src = 'image/gallery/foto2.jpg';
	Img3 = new Image();
	Img3.src = 'image/gallery/foto3.jpg'; 
	Img4 = new Image();
	Img4.src = 'image/gallery/foto4.jpg';

	
	
	ArrImg = [Img1, Img2, Img3, Img4];
	arrlen = ArrImg.length - 1;
	
	i = 0;
	u = 0;
	num = 0;
	left.style.color = "grey";
	
	//смена изображений вправо
	right.onclick = function(){
		arrTagImgLen = arrTagImg.length;
		if (i < arrlen && u < arrlen){
			if (arrTagImgLen < arrlen+1 && num-1 !== u){
				ArrImg[i++].style.display = "none";
				blockImg.appendChild(ArrImg[++num]);
				u = num;
				
			}	else {
					ArrImg[i++].style.display = "none";
					ArrImg[++u].style.display = "inline-block";
				}
			colorPointer(right, i, arrlen);
			colorPointer(left, u, "0");
		}
	}
	
	//смена изображений влево
	left.onclick = function(){
		if ( i > 0 && u > 0){
			left.style.color = "white";
			ArrImg[u--].style.display = "none";
			ArrImg[--i].style.display = "inline-block";
			colorPointer(right, i, arrlen);
			colorPointer(left, u, "0");
		}
	}
	
	//изменение цвета стрелки
	function colorPointer(pointer, a, b) {
		if (a == b) {
			pointer.style.color = "grey"
		} else pointer.style.color = "#ffffff";
	}
}








