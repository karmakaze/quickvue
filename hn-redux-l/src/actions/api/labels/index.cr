# in src/actions/api/labels/index.cr
class Api::Labels::Index < ApiAction
  param page : Int32 = 1

  get "/types/:type/labels" do |type|
    labels = [{ type: type, name: "my-label" }]
    json(labels, Status::OK)
  end
end