module HnReduxS
  before_all "/" do |env|
    env.response.content_type = "application/json"
  end

  get "/items" do |env|
    puts "GET / env.params #{env.params.inspect}"
    result = [] of Hash(String, String|JSON::Any)

    DB.open "postgres://postgres:postgres@localhost/hn_redux_s_development" do |db|
      db.query "SELECT item_id, name, json FROM item_prop" do |rs|
        rs.each do
          item = Hash(String, String|JSON::Any).new
          item["item_id"] = rs.read(String)
          item["name"] = rs.read(String)
          item["json"] = JSON.parse(rs.read(String))
          result << item
        end
      end
    end
    result.to_json
  end

  get "/items/:id" do |env|
    item_id = env.params.url["id"]

    item = Hash(String, String|JSON::Any).new
    DB.open "postgres://postgres:postgres@localhost/hn_redux_s_development" do |db|
      sql = "SELECT name, json FROM item_prop WHERE item_id = $1"
      db.query(sql, item_id) do |rs|
        rs.each do
          name = rs.read(String)
          json = rs.read(String)
          item[name] = JSON.parse(json)
        end
      end
    end
    item.to_json
  end
end
