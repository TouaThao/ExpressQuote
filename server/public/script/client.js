console.log('In')

$(document).ready(readyNow)

function readyNow(){
    getData()
    $('#submit').on('click',addNewInfo)
    console.log('In')
}

function getData(){

    $.ajax({
        url: '/quotes',
        type: 'get'
    }).done(function(res){
        $('#putQuote').empty()
        console.log('Ajax work')
        for (let i = 0; i < res.length; i++) {
            $('#putQuote').append(`<li>${res[i].quotes}` + '- '+ `${res[i].name}</li>`)
            
            }
    }).fail(function(errorRes){
        console.log(errorRes);
    })
}


function addNewInfo(){
let quotes = $('#quoteId').val()
let name = $('#nameId').val()
$.ajax({
    url: '/quotes',
    method: 'POST',
    data : {
      quotes: quotes,
      name: name,

    }
  }).done(function(response) {
    console.log(response);
    getData();
  })


}




