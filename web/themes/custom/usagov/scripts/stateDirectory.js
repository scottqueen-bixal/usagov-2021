jQuery(document).ready(function ($) {
    $('#statelist').after('<label class="visuallyhidden">Select your state:<select class="usa-select usa-sr-only usa-combo-box__select" name="state-info" id="stateselect" aria-hidden="true" tabindex="-1"></select></label>');
    $('#statelist li a').each(function(){
      $('#stateselect').append('<option value="'+$(this).attr('href')+'">'+$(this).text()+'</option>');
    });
    $('#state-info').after('<span class="usa-combo-box__clear-input__wrapper" tabindex="-1"><button type="button" class="usa-combo-box__clear-input" aria-label="Clear the select contents">&nbsp;</button></span><span class="usa-combo-box__input-button-separator">&nbsp;</span><span class="usa-combo-box__toggle-list__wrapper" tabindex="-1"><button type="button" tabindex="0" class="usa-combo-box__toggle-list" aria-label="Toggle the dropdown list">&nbsp;</button></span><ul tabindex="-1" id="state-info--list" class="usa-combo-box__list" role="listbox" aria-labelledby="state-info-label" hidden=""></ul><div class="usa-combo-box__status usa-sr-only" role="status"></div><span id="state-info--assistiveHint" class="usa-sr-only">When autocomplete results are available use up and down arrows to review and enter to select.Touch device users, explore by touch or with swipe gestures.</span>');
    
    var b;
    if($('html').attr('lang')=="en"){
     // $('#test').after('<header><h2><label for="stateselect">Find your state or territory:</label></h2></header>');
      b=$('<button class="usa-button sd-go-btn" type="submit">Go</button>');
    }else{
     // $('#statelist').after('<header><h2><label for="stateselect">Encuentre su estado o territorio:</label></h2></header>');
      b=$('<button class="usa-button sd-go-btn" type="submit">Ir</button>');
    }
    $('#statelist').remove();
   
    var url=$('#stateselect').val();
    b.click(function(){
      window.location.href = url;
    });
    $('#state-go').after(b);
    $('#stateselect').on('change', function(){
      url=$(this).val();
    });
  });