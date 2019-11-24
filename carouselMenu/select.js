	function _$(select){
		if (typeof select != 'string') {
			console.log('報錯：傳入參數需具 string 型態的變數');			
			return null;
		}
		var firstChar = select.charAt(0);
		var elseChars = select.substr(1);
		switch(firstChar){
			case '#':
				return document.getElementById(elseChars);
			break;
			case '.':
				if (document.getElementsByClassName){
					return document.getElementsByClassName(elseChars);
				} else {
					var result = [];
					var allElemnts = document.getElementsByTagName('*');
					console.log(allElemnts);
					for (var i = 0; i < allElemnts.length; i++){
						var e = allElemnts[i];
						var className = e.className;
						var classArr = className.split(' ');
						for (var j = 0; j < classArr.length; j++){
							var c = classArr[j];
							if (c == select.substr(1)) {
								result.push(e);
								break;
							}
						}
					}
					return result;
				}
			break;
			default :
				return document.getElementsByTagName(select);
		}
	}
