class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :data
      
      t.timestamps null: false
    end
  end
end
