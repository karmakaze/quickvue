class Api::Labels::Create < ApiAction
  param key : String = ""

  post "/types/:type/labels/:name" do |type, name|
# Labels.Create params #<Lucky::Params:0x24d9230
# @request=#<HTTP::Request:0x24b7660 @method="POST", @headers=HTTP::Headers{
    # "Host" => "localhost:5000", "User-Agent" => "curl/7.58.0", "Accept" => "*/*", "Content-Length" => "7",
    # "Content-Type" => "application/x-www-form-urlencoded"}, @body=#<IO::Memory:0x24b7300
    # @encoding=nil, @encoder=nil, @decoder=nil, @buffer=Pointer(UInt8)@0x2ae074c, @bytesize=7, @capacity=7,
    # @pos=0, @closed=false, @resizeable=false, @writeable=false>, @version="HTTP/1.1", @cookies=nil,
    # @query_params=HTTP::Params(@raw_params={"key" => ["value"]}),
    # @uri=#<URI:0x24b7180 @scheme=nil, @host=nil, @port=nil, @path="/types/hello/labels/there",
    # @query="key=value", @user=nil, @password=nil, @fragment=nil, @opaque=nil>,
    # @resource="/types/hello/labels/there?key=value">,
    # @route_params={"type" => "hello", "name" => "there"},
    # @_form_params=nil, @_multipart_params=nil, @_multipart_files=nil, @_parsed_multipart_request=nil,
    # @_parsed_json=nil>
    puts "Labels.Create key #{key} params #{params.inspect}"
    json({ status: "ok" }, Status::Created)
  end
end
