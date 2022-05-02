
$(document).ready(function(){

    for( var i = 1; i < 152; i++){
    $('#pokemon').append('<img id="' + i + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png">' )
    }

    $(document).on('click', 'img', function(){
        // console.log($(this).attr('id'))
        var id = $(this).attr('id')
        $.get("https://pokeapi.co/api/v2/pokemon/" + id + "/", function(res) {
            var html_str = "";
            html_str += "<h4>Name : " + res.name.toUpperCase() + "</h4>";
            html_str += '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png">'
            html_str += "<ul> Type(s):"; 
            for(var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].type.name + "</li>";
            }
            html_str += "</ul>";
            html_str += "<p> Height: " + res.height + "</p>"
            html_str += "<p> Weight: " + res.weight + 'lb</p>'
            $("#pokedex_container").html(html_str);
            console.log(res)
            }, "json");
        })

    $('#1').trigger('click')

})

