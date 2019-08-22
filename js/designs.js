/*
 * Pixel Art Maker Javascript code 
 * John Antezana, IPND
 * design.js
 */

//declarations

var color, height, width;

const $pixelCanvas = $('#pixelCanvas');
const $colorPicker = $('#colorPicker');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event) {
    event.preventDefault();

    let height = $inputHeight.val();
    let width = $inputWidth.val();

    $pixelCanvas.html('');

    makeGrid(height, width);
    addCellClickListener();
});

function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $pixelCanvas.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

function addCellClickListener() {
    $('td').click(function (event) {
        let color = $colorPicker.val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style') // remove styling on pixel
        } else {
        $(event.currentTarget).css("background-color", color);
        }
    });
};
