function poke(){
    for(var i = 1; i < 152;++i){
        $('.poke_pic').append('<img id="' + i +'" src="http://pokeapi.co/media/img/' + i + '.png">')
    };
};
function stats(img_id){
    $.get("https://pokeapi.co/api/v2/pokemon/" + img_id + "/", function(res){
        $('#name').append(res.name);
        $('#list').append('<li>' + res.types[0].type.name + '</li>');
        $('#Height').append(res.height);
        $('#Weight').append(res.weight);
        console.log(img_id);
    });
};


$(document).ready(function(){
    poke();
    $('img').click(function(complete){
        var temp = ($(this).attr('id'));
        stats(temp);
    })
})