function ajax(src, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
		  console.log(xhr.responseText);
      callback(xhr.responseText);
		}
	};
	xhr.open("GET",src);
	xhr.send();
  
}
function render(data){
  var element = document.createElement("div");
  element.innerHTML = data;
  document.body.appendChild(element);
// document.createElement() and appendChild() methods are preferred.
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
render(response);
}); // you should get product information in JSON format and render data in the page
//ajax("products.json", function(response){
//render(response);
