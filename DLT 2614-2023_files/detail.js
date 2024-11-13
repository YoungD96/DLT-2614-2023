$(function() {
		var ind = 0;

		$('.para-title h2').each(function(){
			var $cache= $(this);
			$(this).attr('id','link'+ind);
			var $li = $('<li class="level1"><span class="index">'+(ind+1)+'</span><span class="text"><a>'+$(this).text()+'</a></span></li>');
			$li.click(function(){
				var hh = $cache.offset().top;
				try{
					 involke('position',hh);  
				} catch(e){
					
				}
				$('html,body').stop().animate({'scrollTop':hh}, 500);
			});
			$('.catalog-list ol:eq('+parseInt(ind++/4)+')').append($li);
		});
		
		$('[data-toggle="tooltip"]').tooltip();		
});