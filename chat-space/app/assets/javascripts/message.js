$(function() {
  function buildHTML(message) {
    var img = message.image ? `<img src= ${message.image}>` : "";
    var html = `<div class="right__message__messages">
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
                  <div class="right__message__messages-message__image">
                    ${img}
                  </div>
                  </div>
                </div>`
    return html;
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
      $('.right__message__messages').append(html)
      $('#new_message')[0].reset();
      $('.right__message__messages').animate({
        scrollBottom: $('.right__message__messages')[0].scrollHeight}, 'fast');
      })
    .fail(function() {
      alert('');
    })
  })
});
