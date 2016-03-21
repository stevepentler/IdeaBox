ActiveRecord::Schema.define(version: 20160321193444) do

  enable_extension "plpgsql"

  create_table "ideas", force: :cascade do |t|
    t.string  "title"
    t.string  "body"
    t.integer "quality", default: 0
  end

end
