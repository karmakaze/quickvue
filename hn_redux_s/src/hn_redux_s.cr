require "kemal"
require "./hn_redux_s/*"

# TODO: Write documentation for `HnReduxS`
module HnReduxS
  get "/:id" do |env|
  # .. show something ..
    puts "env.params #{env.params.inspect}"
    "Hello, world.\n"
  end

  # post "/" do
  # .. create something ..
  # end

  # put "/" do
  # .. replace something ..
  # end

  # patch "/" do
  # .. modify something ..
  # end

  # delete "/" do
  # .. annihilate something ..
  # end
end

Kemal.run