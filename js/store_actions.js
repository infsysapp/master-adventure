
    function access_store_button() {
        if ( arctica['Store'] == true ) {
          arctica['Store'] = false;
          window.document.getElementById('access-store').textContent = "Enter Store";
          window.document.getElementById('display-dialog-box').style.display = "none";
          var text_title = '';
          text_title = game_states['Top_Tile'].replaceAll("_", " ");
          text_title += " - " + game_states['Tile'].replaceAll("_", " ");
          tile_title.textContent = text_title;
          tile_image.src = game_states['Image'];
          audio_source.src = game_states['Music'];
          audio_master.load();
          audio_master.play();
          return null;
        }
        if ( arctica[game_states['Top_Tile']][game_states['Tile']]['Store'] != 'X' ) {
          arctica['Store'] = true;
          window.document.getElementById('access-store').textContent = "Exit Store";
          var store_tile = arctica[game_states['Top_Tile']][game_states['Tile']]['Store']['Name'];
          var store_image = arctica[game_states['Top_Tile']][game_states['Tile']]['Store']['ImagePath'];
          var store_music = arctica[game_states['Top_Tile']][game_states['Tile']]['Store']['MusicPath'];
          var owner_intros = arctica[game_states['Top_Tile']][game_states['Tile']]['Store']['OwnerIntro'];
          var owner_outros = arctica[game_states['Top_Tile']][game_states['Tile']]['Store']['OwnerOutro'];
          //tile_title.textContent = store_tile.replace("_", " ");
          tile_image.src = store_image;
          audio_source.src = store_music;
          audio_master.load();
          audio_master.play();
          // console.log('owner_intros', owner_intros);
          // console.log("rand", getRndInteger(0, owner_intros.length - 1));
  
          window.document.getElementById('display-dialog-box').style.display = "block";
          var random_owner_intro = owner_intros[getRndInteger(0, owner_intros.length)];
          window.document.getElementById('display-dialog-box').innerHTML = random_owner_intro;
  
  
          // game_pause = false;
          // play_stop_game();
        }
        return null;
      }

function display_menu() {

    var menu_container = window.document.createElement( "DIV" );
    // menu_container.innerHTML = set_store_inventory();

}

function set_store_inventory() { // Set UL list and return this object list.
    var weaponry_list = arctica[ game_states[ 'Top_Tile' ] ][ game_states[ 'Tile' ] ][ 'Store' ][ 'Weaponry' ];
    var weaponry_item_list = Object.keys( weaponry_list );
    weaponry_item_list_count = weaponry_item_list.length;
    var armory_list = arctica[ game_states[ 'Top_Tile' ] ][ game_states[ 'Tile' ] ][ 'Store' ][ 'Armory' ];
    var armor_item_list = Object.keys( armory_list );
    armor_item_list_count = armor_item_list.length;
    var htmlText = "";
    htmlText += "<span>Weapon Catalog</span>";
    htmlText += "<ol class=\"store-items\">";
    for ( var item = 0; item < weaponry_item_list_count; item++ ) {
        htmlText += "<li onclick=\"buy_item( 'Weaponry', " + item + ");\">" + weaponry_item_list[ item ] + "</li>";
    } 
    htmlText += "</ol>";
    htmlText += "<span>Armor Catalog</span>";
    htmlText += "<ol class=\"store-items\">";
    for ( var item = 0; item < armor_item_list_count; item++ ) {
        htmlText += "<li onclick=\"buy_item( 'Armory', " + item + ");\">" + armory_item_list[ item ] + "</li>";
    } 
    htmlText += "</ol>";
}

function buy_item( item_type, item ) {
    if ( 'Armory' == item_type ) {
        var armory_list = arctica[ game_states[ 'Top_Tile' ] ][ game_states[ 'Tile' ] ][ 'Store' ][ 'Armory' ];
        var armory_item_list = Object.keys( armory_list );
        var armory_item = armory_item_list[ item ];
        var armor_quantity = armory_list[ armory_item ][ 'Quantity' ];
        var armor_cost = armory_list[ armory_item ][ 'Cost' ];
        var armor_resistance = armory_list[ armory_item ][ 'Resistance' ];
        if ( 0 != armor_quantity ) {
            if ( player_states[ 'Coins' ] >= armor_cost ) {
                player_states[ 'Coins' ] = player_states[ 'Coins' ] - armor_cost;
                player_states[ 'Armor' ] = { 'Name' : armory_item, 'Resistance' : armor_resistance };
            } else {
                // TODO: Message or red borders with a sound effect?
            }
        } else {
            // TODO: Message or red borders with a sound effect?
        }
    } else if ( 'Weaponry' == item_type ) {
        var weaponry_list = arctica[ game_states[ 'Top_Tile' ] ][ game_states[ 'Tile' ] ][ 'Store' ][ 'Weaponry' ];
        var weaponry_item_list = Object.keys( weaponry_list );
        var weaponry_item = weaponry_item_list[ item ];
        var weapon_quantity = weaponry_list[ weaponry_item ][ 'Quantity' ];
        var weapon_cost = weaponry_list[ weaponry_item ][ 'Cost' ];
        var weapon_resistance = weaponry_list[ weaponry_item ][ 'Resistance' ];
        if ( 0 != weapon_quantity ) {
            if ( player_states[ 'Coins' ] >= weapon_cost ) {
                player_states[ 'Coins' ] = player_states[ 'Coins' ] - weapon_cost;
                if ( 'Arrows' == weaponry_item ) {
                    player_states[ 'Arrows' ] = player_states[ 'Arrows' ] + 1;
                } else if ( 'Throwing_Knife' == weaponry_item ) {
                    player_states[ 'Throwing_Knife' ] = player_states[ 'Throwing_Knife' ] + 1;
                } else {
                    player_states[ 'Weapon' ] = { 'Name' : weaponry_item, 'Resistance' : weapon_resistance };
                }
            } else {
                // TODO: Message or red borders with a sound effect?
            }
        } else {
            // TODO: Message or red borders with a sound effect?
        }


    } else {
        // Do nothing
    }
}

// Idea for the future? For simplicity, as is by pointing and clicking the li element that looks like a link.
// function replace_action_btns_w_store_btns() {

// }

// function replace_store_btns_w_action_btns() {

// }