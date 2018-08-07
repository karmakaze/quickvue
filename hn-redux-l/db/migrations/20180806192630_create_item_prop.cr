class CreateItemProp::V20180806192630 < LuckyMigrator::Migration::V1
  def migrate
    create :item_prop do
      add item_id : Int32
      add name : String
      add json : String
    end

    # Run custom SQL with execute
    #
    execute "CREATE UNIQUE INDEX item_prop_item_id_name_index ON item_prop (item_id, name);"
  end

  def rollback
    drop :item
  end
end
