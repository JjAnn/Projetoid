class Reltask < ActiveRecord::Base
geocoded_by :ip_address
  belongs_to :task
  belongs_to :relato
  belongs_to :user
has_many :projetos
belongs_to :projeto
has_many :relatos
end
