class Tsk2 < ActiveRecord::Base
belongs_to :tsk1
has_many :tsk3s
belongs_to :task

end
