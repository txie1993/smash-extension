

chrome.runtime.sendMessage({action: 'getResults'},function(response) {
  searchTech(response.source);
});



function searchTech (searchString) { // NOTE: this function will not work until we set up firebase and iframes

  let url = `http://smashlounge.com/api/techs/all`; //need to replace with firebase link


  $.ajax({
    url: url,
    success: function(data) {
    let htmlData = data;
    console.log(htmlData);
    //next step: match name with searchString, then pull the gifs, input, and title
    }

  });
}
