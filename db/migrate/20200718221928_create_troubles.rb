class CreateTroubles < ActiveRecord::Migration[6.0]
  def change
    create_table :troubles do |t|
      t.text :content
      t.string :err_screen
      t.string :solve_url
      t.text :conduct
      t.text :consider
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
