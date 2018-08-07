# in src/actions/api/labels/show.cr
class Api::Labels::Show < ApiAction
  get "/types/:type/labels/:name" do |type, name|
    json({ type: type, name: name }, Status::OK)
  end
end