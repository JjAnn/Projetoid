class AddUserToConditional < ActiveRecord::Migration
  def change
    add_reference :conditionals, :user, index: true, foreign_key: true
  end
end
