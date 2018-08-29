json.array! @new_messages do |new_message|
  json.body new_message.body
  json.image new_message.image_url
  json.user_name  new_message.user.name
  json.created_at  new_message.created_at
  json.id new_message.id
end
