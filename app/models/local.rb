class Local < ActiveRecord::Base
belongs_to :cliente
has_many :clientes
end
