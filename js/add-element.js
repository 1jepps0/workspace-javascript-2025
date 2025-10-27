/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('#four').addClass('hot');
$('.hot').each(function () {
  $(this).removeClass('hot');
  $(this).addClass('cool');
});

// traverse the elements
$('#two').next().text('milk');
// add a new element by clicking the plus sign

$('#todo').append('<li class="cool">cake</li>');


// before and after are for siblings
// append and prepend are for parent
$('#add').click(addElement);

function addElement() {
  // add a new element
  $('#save').text("Save");
  // add a input text box inside of <li> element 
  $('#todo').append('<li><input type="text"></li>');
  // whenever the user are done add the element
  $('input').blur(function(){
    $(this).parent().addClass('cool');
    $(this).parent().click(changeStyle);
    var userinput = $(this).val();
    $(this).parent().text(userinput);
 
  });

}

// bind click with the event handler
$('li').click(changeStyle);
//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  }else if($(this).hasClass('complete')){
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }else{
    $(this).addClass('cool');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
  $('#save').text("Save");
}
