require "kemal"
require "json"
require "db"
require "pg"

module HnReduxS
  before_all "/" do |env|
    env.response.content_type = "application/json"
  end

  post "/types/:type/labels" do |env|
    type_ = env.params.url["type"]
    name = env.params.json.fetch("name", nil)
    text = env.params.json.fetch("text", nil)
    case
    when name && ["story", "comment"].includes?(type_)
      result = [] of Hash(String, String?)
      DB.open "postgres://postgres:postgres@localhost/hn_redux_s_development" do |db|
        sql = "INSERT INTO label (type, name, text) VALUES ($1, $2, $3)"
        db.query(sql, type_, name, text) do |rs|
          rs.each do
            item = Hash(String, String?).new
            item["type"] = type_
            item["name"] = rs.read(String)
            item["text"] = rs.read(String?)
            result << item
          end
        end
      end
      env.params.json.to_json
    else
      env.response.status_code = 400
    end
  end

  get "/types/:type/labels" do |env|
    type_ = env.params.url["type"]

    if ["story", "comment"].includes?(type_)
      result = [] of Hash(String, String?)

      DB.open "postgres://postgres:postgres@localhost/hn_redux_s_development" do |db|
        sql = "SELECT name, text FROM label WHERE type = $1"
        db.query(sql, type_) do |rs|
          rs.each do
            item = Hash(String, String?).new
            item["type"] = type_
            item["name"] = rs.read(String)
            item["text"] = rs.read(String?)
            result << item
          end
        end
      end
      result.to_json
    else
      env.response.status_code = 400
    end
  end
end