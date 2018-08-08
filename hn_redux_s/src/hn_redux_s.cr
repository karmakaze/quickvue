require "kemal"
require "./hn_redux_s/*"

# TODO: Write documentation for `HnReduxS`
module HnReduxS
  static_headers do |response, filepath, filestat|
    response.headers.add("Access-Control-Allow-Origin", "*")
  end
end

Kemal.run
