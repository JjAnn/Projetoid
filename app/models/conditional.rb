class Conditional < ActiveRecord::Base
belongs_to :relato
has_many :relatos
belongs_to :projeto
end
