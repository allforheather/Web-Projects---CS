	function loadPage(pageNumber) {
				
				//alert("loading page" + pageNumber);
			
				var myIframe = document.getElementById("myIframe");
				
				//alert(myIframe);
				
				myIframe.src = "iframe-pages/" + pageNumber + ".html" ;
			}
			