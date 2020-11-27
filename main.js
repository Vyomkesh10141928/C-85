var canvas = new fabric.Canvas('myCanvas');
player_y = 10;
player_x = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("DDD.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    });

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and Shift key is pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keypressed == '77') {
        console.log("m and Shift key is pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == '70') {
        new_image("thor_face.png");
    }
    if (keypressed == '76') {
        new_image("hulk_legs.png");
    }

    if (keypressed == '66') {
        new_image("ironman_body.png");
    }
    if (keypressed == '82') {
        new_image("spiderman_right_hand.png");
    }
    if (keypressed == '72') {
        new_image("captain_ameria_left_hand.png");
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '39') {
        right();
    }
}