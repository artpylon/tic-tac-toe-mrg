
#sign-in-json
curl "http://tic-tac-toe.wdibos.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
    "email": "b@b.com",
    "password": "secret"}
  }'

#sign-up-json
#curl "http://localhost:3000/sign-up" \
curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
    "email": "b@b.com",
    "password": "secret",
    "password_confirmation": "secret"}
  }'

# data output from curl doesn't have a trailing newline
echo

#change-password-josn
#curl "http://localhost:3000/change-password/${ID}" \
curl "http://tic-tac-toe.wdibos.com/change-password/46" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiViMzA0NDkwYmViY2UxM2RhYWE5MDI5OWU0NDI5NmM0NwY6BkVG--8d7922fe3b6c7a3df15b391b72326725cb9b720b" \
--data '{
  "passwords": {
    "new": "secret1",
    "old": "secret"
  }
}'

# data output from curl doesn't have a trailing newline
echo
#create game
curl "http://tic-tac-toe.wdibos.com/games" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiU1ZThmNThiOWJiNjU5ODU1ZTIyYTVhMWZkNzg3NWQzZgY6BkVG--d91ed74650e3094e40eddd0d1687c036115160e6" \
--data '{}'

#update game
curl "http://tic-tac-toe.wdibos.com/games/1060" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiVlZmY2ZDI4ZDFjZTQ4NzkzMjhmOWQ1MjE4OGM0ODNmZAY6BkVG--d600ffd7c8b1185b536257afa4e2851013799f24" \
--data '{"game": {"cell": {"index": 0, "value": "x"}, "over": true}}'

#get all games
curl "http://tic-tac-toe.wdibos.com/games/1064" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiU0Zjc1NmNiYzExOTUxOTQ1ODc1NmZjODNlMjQ5OTQ5NAY6BkVG--a73f34c21db8eea527b3a98b9b7c063d4e4b1dd8"
# --data '{}'
