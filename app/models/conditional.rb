class Conditional < ActiveRecord::Base
belongs_to :relato
has_many :relatos
belongs_to :projeto
belongs_to :user
has_many :users
end
