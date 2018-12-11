var imgHead = [
			'../img/main-img/6-layers.jpg',
			'../img/main-img/6-layers-2.jpg'
		], i=1;
	function csaHead(){

		if(i > (imgHead.length-1)){
			$('.csa-head').animate({'opacity':'0'},200,function(){
				i=1;
				$('.csa-head').css({'background':'url('+imgHead[0]+')'});
			});
			$('.csa-head').animate({'opacity':'1'},200);
		}else{
			$('.csa-head').animate({'opacity':'0'},200,function(){
				$('.csa-head').css({'background':'url('+imgHead[i]+')'});
				i++;
			});
			$('.csa-head').animate({'opacity':'1'},200);
		}
		
	}
	var intervalCsaHead = setInterval(csaHead,8000);