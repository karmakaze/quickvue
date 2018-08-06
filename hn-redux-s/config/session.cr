require "./server"

Lucky::Session::Store.configure do
  settings.key = "hn_redux_s"
  settings.secret = Lucky::Server.settings.secret_key_base
end
