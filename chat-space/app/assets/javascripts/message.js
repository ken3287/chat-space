$(function() {
  function buildHTML(message) {
    var img = message.image ? `<img class="right__message__messages-message__image" src=${ message.image }>` : "";
    var html = `<div class="right__message__messages" data-id=${ message.id }>
                  <span class="right__message__messages-name">
                    ${message.user_name}
                  </span>
                  <span class="right__message__messages-time">
                    ${message.created_at}
                  </span>
                  <div class="right__message__messages-message">
                    <p class="right__message__messages-message-body">
                      ${message.body}
                    <p/>
                    ${img}
                  </div>
                </div>`
    return html;
  }

 $(window).on('load', function() {
    if(document.URL.match(/groups\/\d+\/messages/)) {
      setInterval(update, 5000 );
    } else {
      clearInterval(interval);
    }
  });
  function update(){
    var message_id = $('.right__message__messages:last').data('id') || 0;
    console.log(this)
    $.ajax({
      url: location.href,
      type: "GET",
      data: { id: message_id},
      dataType: "json"
    })
    .done(function(data) {
      console.log(this)
      $.each(data, function(i, data){
        var html = buildHTML(data);
        $('.right__message').append(html);
        $('.right__message').animate({ scrollTop: $('.right__message')[0].scrollHeight },'fast');
      });
    })
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.right__message').append(html)
      $('#new_message')[0].reset();
      $('#form__submit').prop('disabled', false);
      $('.right__message').animate({ scrollTop: $('.right__message')[0].scrollHeight },'fast');
      })
    .fail(function() {
      alert('');
    })
  })
})
