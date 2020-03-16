$(function() {
    $('#js-shopping-list-form').submit(event => {
      // this stops the default form submission behavior
      event.preventDefault();
      const newItem = $(this).find('#shopping-list-entry');
      $("ul").append(
        `<li>
        <span class="shopping-item"> ${newItem.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      );
    }); 

    //remove the entire li element when delete button is clicked
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      });

    //toggle if an item is checked
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
      });
  })