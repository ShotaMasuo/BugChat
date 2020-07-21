json.array! @troubles do |trouble|
  json.id trouble.id
  json.content trouble.content
  json.created_at trouble.created_at.strftime("%Y-%m-%d %H:%M")
end