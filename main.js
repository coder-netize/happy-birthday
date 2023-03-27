var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.formURL('birthdayImage.jpg' , function(img) {
block_image_object = Img;

block_image_object.Towidth(700);
block_image_object.Toheight(510);
block_image_object.set ({

top:0,
left:0
});
canvas.add(block_image_object);
    });
	
}

function playSound(){

x.play();
    
}
