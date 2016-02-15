var  curPreview,
	 curTempName;

var  badgeHtml = '<a href="#" class="badge-ok">' +
            	 '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' +
        		 '</a>';

ctrl.goBack = function()  {
    ctrl.reload('/website/info');
}


ctrl.chooseTemplate = function(link, tempName)  {
	if (curPreview)
		curPreview.parent().find('a').remove();
	curPreview = $(link);
	curTempName = tempName;

	var  pos = curPreview.position();
	pos.top += 15;
	pos.left += 165;

	$(badgeHtml).appendTo( curPreview.parent() ).css(pos);
}


ctrl.create = function()  {
    var  pdata = {
            domain: ctrl.sel('#wsDomain').val(),
            caCode: ctrl.sel('#wsApp').val(),
            sitePath: ctrl.sel('#wsPath').val(),
            title: ctrl.sel('#wsTitle').val(),
            locale: ctrl.sel('#wsLocale').val(),
            homePage: ctrl.sel('#wsHome').val(),
            temName: curTempName,
            doCreate: true
         };

    $.post('/website/update.wsj', pdata, function(result) {
        alert( result.message );
        
        if (result.errCode === 0)
            document.location.reload();
    }, 'json');
}