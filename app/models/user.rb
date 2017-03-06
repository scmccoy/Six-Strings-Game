class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          password_length: 1..Float::INFINITY
          
  include DeviseTokenAuth::Concerns::User

  validates_length_of :username, maximum: 20
end
