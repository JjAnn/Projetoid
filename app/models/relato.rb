class Relato < ActiveRecord::Base
geocoded_by :ip_address,
  :latitude => :latitude, :longitude => :longitude
after_validation :geocode
belongs_to :cliente
belongs_to :projeto
belongs_to :local
belongs_to :task
has_many :relatos
belongs_to :user
belongs_to :reltask
has_many :reltasks
has_many :users
has_many :conditionals
belongs_to :conditional

accepts_nested_attributes_for :reltasks, allow_destroy: true

end
