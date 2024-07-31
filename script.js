$(function() {
  $(document).ready(function() {
    $('.accordion-content').hide();
    $('.accordion-header:first').addClass('active').next().show();
  
    $('.accordion-header').click(function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').next().slideUp();
      } else {
        $('.accordion-header').removeClass('active').next().slideUp();
        $(this).addClass('active').next().slideDown();
      }
    });
  });

  $(document).ready(function() {
    $('#load-todos').click(function() {
      $.ajax({
        url: 'https://dummyjson.com/todos',
        method: 'GET',
        success: function(response) {
          $('#todo-list').empty();
          response.todos.forEach(function(todo) {
            $('#todo-list').append('<li>' + todo.todo + '</li>');
          });
        },
        error: function() {
          alert('Failed to load to-do items.');
        }
      });
    });
  });
})