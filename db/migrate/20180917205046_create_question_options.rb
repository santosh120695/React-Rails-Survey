class CreateQuestionOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :question_options do |t|
      t.references :question, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
