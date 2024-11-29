class Message < ApplicationRecord
    validates :body, inclusion: { in: ["❤️"], message: "Will only accept '❤️' as a message" }
end
