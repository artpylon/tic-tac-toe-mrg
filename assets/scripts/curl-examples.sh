
#sign-in-json
curl "http://tic-tac-toe.wdibos.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
    "email": "matthewgray88@gmail.com",
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
    "email": "m88@gmail.com",
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
