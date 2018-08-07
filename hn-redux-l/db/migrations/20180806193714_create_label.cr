class CreateLabel::V20180806193714 < LuckyMigrator::Migration::V1
  def migrate
    create :label do
      add type : String
      add name : String
      add text : String?
    end

    # Run custom SQL with execute
    #
    execute "CREATE UNIQUE INDEX label_type_name_index ON label (type, name);"
  end

  def rollback
    drop :label
  end
end
