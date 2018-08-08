module HnReduxS
  before_all "/" do |env|
    env.response.content_type = "application/json"
  end

  put "/items/:id/:name" do |env|
    item_id = env.params.url["id"]
    name = env.params.url["name"]
    puts "PUT /items/#{item_id}/#{name}"

    DB.open "postgres://postgres:postgres@localhost/hn_redux_s_development" do |db|
      sql = "INSERT INTO item_prop (item_id, name, json) VALUES ($1, $2, 1)
             ON CONFLICT ON CONSTRAINT item_prop_pkey DO NOTHING"
      db.exec(sql, item_id, name)
    end
    env.response.status_code = 204
  end

  delete "/items/:id/:name" do |env|
    item_id = env.params.url["id"]
    name = env.params.url["name"]
    puts "DELETE /items/#{item_id}/#{name}"

    DB.open "postgres://postgres:postgres@localhost/hn_redux_s_development" do |db|
      sql = "DELETE FROM item_prop WHERE item_id = $1 AND name = $2"
      db.exec(sql, item_id, name)
    end
    env.response.status_code = 204
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
