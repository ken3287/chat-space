$(function() {
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-fields").val();
    console.log(input)
    if((input != "") && (input != " "));
        $.ajax({
          type: 'GET',
          url: '/users',
          data: { keyword: input },
          dataType: 'json'
        })
  });
});
