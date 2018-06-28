console.log('In')

$(document).ready(readyNow)

function readyNow(){
    getData()
    $('#submit').on('click',addNewInfo())
    console.log('In')
}

function getData(){

    $.ajax({
        url: '/word',
        type: 'GET'
    }).done(function(res){
        console.log('Ajax work')
        for (let i = 0; i < res.length; i++) {
            $('#putQuote').append(`<li>${res[i].quotes} , ${res[i].name}</li>`)
            
            }
    }).fail(function(errorRes){
        console.log(errorRes);
    })
}


function addNewInfo(){
    console.log('addNewInfo')
    $.ajax({
        url: '/newAdd',
        type: 'POST',
        datatype: {
            name: 'sdadf',
            quotes: 'sodfadsf'
        },
    }).done(function(res){
        console.log('inPOST')
        $('#putQuot').append('<li></li>')
    }).fail(function(newError){
        console.log('ErrorInPost')
    })
}