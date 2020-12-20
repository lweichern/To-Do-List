$(document).ready(function(){

    //Blue border on focus input text
    $('input[type=text]').focus(function(){
        $(this).css('border-bottom', '2px solid blue');
    });

    $('textarea').focus(function(){
        $(this).css('border-bottom', '2px solid blue');
    });

    // Hide all blue borders when focus out
    $('input[type=text]').blur(function(){
        $(this).css('border-bottom', '2px solid gray');
    });

    $('textarea').blur(function(){
        $(this).css('border-bottom', '2px solid gray');
    });

    // Hide all error messages
    $('.empty').hide();

    //Check if input is empty
    function isEmpty(idName){
        $(idName).css('border-bottom', '2px solid red');
    }

    function notEmpty(idName){
        $(idName).css('border-bottom', '1px solid gray');
    }

    // Clear all error messages and change border-bottom of input text to gray
    function clearAll(){
        notEmpty('#name');
        $('.name-empty').hide();

        notEmpty('#staus');
        $('.status-empty').hide();

        notEmpty('#details');
        $('.details-empty').hide();

        $('#importance').prop('checked', false);
    }

    //Hover close button
    $(document).on('mouseenter', '.listclose', function(){
        $(this).css('background-color', 'red');
        $(this).css('color', 'white');
    });
    $(document).on('mouseleave', '.listclose', function(){
        $(this).css('background-color', 'transparent');
        $(this).css('color', 'black');
    });

    if($('li').attr('value', 'important')){
        $('li').css('box-shadow', '0 8px 32px 0 rgba(255, 0, 0, 0.37) !important;');
    }

    // Add items to list
    let item_name;
    let item_status;
    let item_details;

    $('#name').keyup((e) => {
        item_name = e.target.value;
    });

    $('#status').keyup((e) => {
        item_status = e.target.value;
    });

    $('#details').keyup(e => {
        item_details = e.target.value;
    })

    $('#submit').on('click', function(e){
        e.preventDefault();

        console.log(`${item_name} ${item_status} ${item_details}`);

        // Check if input text is empty
        if(!$('#name').val() || !$('#details').val() || !$('#status').val()){
            
            if(!$('#name').val()){
                isEmpty('#name');
                $('.name-empty').show();
            }else{
                notEmpty('#name');
                $('.name-empty').hide();
            }

            if(!$('#details').val()){
                isEmpty('#details');
                $('.details-empty').show();
            }else{
                notEmpty('#details');
                $('.details-empty').hide();
            }

            if(!$('#status').val()){
                isEmpty('#status');
                $('.status-empty').show();
            }else{
                notEmpty('#status');
                $('.status-empty').hide();
            }

            return false;
        }

        // Check if radio button is checked
        if($('#importance').is(':checked')){
            $('ul').hide().append(`<li>
                                        <div class="list important">
                                            <div class="listname">${item_name}</div>
                                            <div class="list-details">${item_details}</div>
                                            <div class="liststatus">${item_status}</div>
                                            <div class="listclose"><i class="fas fa-times"></i></div>
                                        </div>
                                    </li>`
                                ).fadeIn(1000);
        }else{
            // Fade in effect when append
            $('ul').hide().append(`<li>
                                        <div class="list">
                                            <div class="listname">${item_name}</div>
                                            <div class="list-details">${item_details}</div>
                                            <div class="liststatus">${item_status}</div>
                                            <div class="listclose"><i class="fas fa-times"></i></div>
                                        </div>
                                    </li>`
                                ).fadeIn(1000);
        }

         // clear text box
         $('input[type=text]').val("");
         $('textarea').val("");

        //  Clear all eror messsages
        clearAll();

         // clear variables
         item_details = item_name = item_status = "undefined";
    });

    $(document).on('click', '.listclose', function(){
        $(this).parent().parent().remove();
        $('ul').hide().fadeIn(1000);
    })

})