class CreateRealizes < ActiveRecord::Migration[6.0]
  def change
    create_table :realizes do |t|
      t.text :function
      t.text :conduct
      t.string :solve_url
      t.string :git_url
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
