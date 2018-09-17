class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.references :survey, foreign_key: true
      t.string :question_type
      t.text :content
      t.integer :position

      t.timestamps
    end
  end
end
