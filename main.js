function poke(){
    for(var i = 1; i < 152;++i){
        $('.poke_pic').append('<img id="' + i +'" src="http://pokeapi.co/media/img/' + i + '.png">')
    };
};
function stats(img_id){
    $.get("https://pokeapi.co/api/v2/pokemon/" + img_id + "/", function(res){
        $('#name').text(res.name);
        for(var i = 0; i < res.types.length;++i){
        $('#list').text('<li>' + res.types[i].type.name + '</il>');
        }
        $('#Height').text('&lt;p&gt;' + res.height + '&lt;/p&gt');
        $('#Weight').text('&lt;p&gt;' + res.weight + '&lt;/p&gt;');
        console.log(img_id);
    });
};


$(document).ready(function(){
    poke();
    $('img').click(function(complete){
        var temp = ($(this).attr('id'));
        $('#pokedex_img').attr('src', $(this).attr('src'));
        stats(temp);
    })
})