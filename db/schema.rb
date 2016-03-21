
ActiveRecord::Schema.define(version: 20160321193444) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ideas", force: :cascade do |t|
    t.string   "title"
    t.string   "body"
    t.integer  "quality",    default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

end
