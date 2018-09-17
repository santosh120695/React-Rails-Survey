class CreateSurveys < ActiveRecord::Migration[5.2]
  def change
    create_table :surveys do |t|
      t.string :name
      t.text :description
      t.datetime :scheduled_time
      t.datetime :end_time
      t.boolean :active

      t.timestamps
    end
  end
end
